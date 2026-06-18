import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MobileNavHeader } from "./mobile-nav-header";
import { NavItems } from "../nav-items";
import { EASE_EXPO_OUT } from "../../../util/transitionPage";

type MobileNavType = {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  pageTitle: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileNav = ({
  expanded,
  setExpanded,
  pageTitle,
  setModalOpen,
}: MobileNavType) => {
  const reduceMotion = useReducedMotion();

  return (
    <header className="fixed top-0 inset-x-0 z-50 text-white">
      {/* Full-viewport frosted overlay — anchored to the viewport, not a
          zero-height parent, so it actually covers the page. */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.25,
              ease: EASE_EXPO_OUT,
            }}
            className="fixed inset-0 -z-10 bg-black/90 backdrop-blur-md"
          />
        )}
      </AnimatePresence>

      {/* Header bar: title + hamburger (always present) */}
      <div className="relative h-20">
        <MobileNavHeader {...{ expanded, setExpanded, pageTitle }} />
      </div>

      {/* Centered link list, revealed when expanded */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="mobile-links"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: reduceMotion ? 0 : 0.3,
              ease: EASE_EXPO_OUT,
            }}
            className="fixed inset-x-0 top-20 bottom-0 flex justify-center"
          >
            <NavItems
              classNames="flex flex-col justify-around items-center"
              {...{ setExpanded, pageTitle, setModalOpen }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

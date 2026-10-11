import { motion, useReducedMotion } from "framer-motion";
import { itemVariants, EASE_EXPO_OUT } from "../../util/transitionPage";

type BandMemberProps = {
  profilePic: string;
  name: string;
  desc: string;
  listening: string;
  expanded: boolean;
  onToggle: () => void;
};

const BandMember = ({
  profilePic,
  name,
  desc,
  listening,
  expanded,
  onToggle,
}: BandMemberProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      variants={itemVariants}
      onClick={onToggle}
      aria-expanded={expanded}
      className={
        expanded
          ? "fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center gap-4 border-0 bg-black/70 px-6 text-white backdrop-blur-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
          : "group flex cursor-pointer flex-col items-center gap-2 border-0 bg-transparent p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
      }
    >
      <img
        src={profilePic}
        alt=""
        className={
          expanded
            ? "aspect-square h-[345px] rounded-full object-cover shadow-lg shadow-black/40 ring-1 ring-white/10 md:h-[400px]"
            : "aspect-square h-28 w-28 rounded-full object-cover shadow-lg shadow-black/40 ring-1 ring-white/10 transition duration-200 group-hover:brightness-110 group-hover:ring-white/30 sm:h-36 sm:w-36"
        }
        loading="eager"
      />
      <p
        className={
          expanded
            ? "text-balance text-4xl tracking-[-0.02em]"
            : "text-xl tracking-[-0.02em]"
        }
      >
        {name}
      </p>
      {expanded && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.25, ease: EASE_EXPO_OUT }}
          className="max-w-md text-center"
        >
          <p className="text-xl leading-normal">{desc}</p>
          <p className="mt-4 text-lg text-white/60">
            Currently listening to {listening}
          </p>
        </motion.div>
      )}
    </motion.button>
  );
};

export default BandMember;

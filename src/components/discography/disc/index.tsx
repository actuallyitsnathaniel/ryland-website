import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import MusicPlatformLinks from "./platform-links";
import { EASE_EXPO_OUT, EASE_EXPO_IN_OUT } from "../../../util/transitionPage";

export type DiscCategory = "single" | "ep" | "album" | "feature";

type DiscType = {
  className?: string;
  appleMusicLink?: string;
  spotifyLink?: string;
  soundcloudLink?: string;
  tidalLink?: string;
  youtubeLink?: string;
  webLink?: string;
  category?: DiscCategory;
  artwork: string;
  title?: string;
  priority?: boolean;
};

const Disc = ({
  className,
  appleMusicLink,
  spotifyLink,
  soundcloudLink,
  tidalLink,
  youtubeLink,
  webLink,
  artwork,
  title,
  priority = false,
}: DiscType) => {
  const [focused, setFocused] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`${className} text-8xl group p-3`}
      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.2,
      }}
    >
      <motion.div
        role="button"
        tabIndex={0}
        aria-expanded={focused}
        aria-label={`Show streaming links for ${title}`}
        className="relative h-72 w-72 mx-auto overflow-hidden rounded-xl shadow-lg shadow-black/40 ring-1 ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        onMouseLeave={() => setFocused(false)}
        onMouseEnter={() => setFocused(true)}
        onClick={() => setFocused(!focused)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFocused((f) => !f);
          }
        }}
        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <img
          className={`h-full w-full object-cover transition-all duration-200 ${
            focused ? "blur-sm brightness-50" : ""
          }`}
          src={artwork}
          alt={title}
          loading={priority ? "eager" : "lazy"}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center overflow-clip"
          animate={focused ? "visible" : "hidden"}
          variants={{
            visible: {
              opacity: 1,
              pointerEvents: "auto",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              transition: {
                duration: reduceMotion ? 0 : 0.2,
                ease: EASE_EXPO_OUT,
              },
            },
            hidden: {
              opacity: 0,
              pointerEvents: "none",
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 0)",
              transition: {
                duration: reduceMotion ? 0 : 0.15,
                ease: EASE_EXPO_IN_OUT,
              },
            },
          }}
        >
          <MusicPlatformLinks
            className="origin-center"
            {...{
              title,
              appleMusicLink,
              spotifyLink,
              soundcloudLink,
              tidalLink,
              youtubeLink,
              webLink,
            }}
          />
        </motion.div>
      </motion.div>
      <div className="mx-auto mt-3 flex w-72 flex-wrap justify-center text-center text-lg">
        {title}
      </div>
    </motion.div>
  );
};

export default Disc;

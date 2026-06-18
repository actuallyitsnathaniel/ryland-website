import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import MusicPlatformLinks from "./platform-links";
import { EASE_EXPO_OUT, EASE_EXPO_IN_OUT } from "../../../util/transitionPage";

type DiscType = {
  className?: string;
  appleMusicLink?: string;
  spotifyLink?: string;
  soundcloudLink?: string;
  tidalLink?: string;
  youtubeLink?: string;
  webLink?: string;
  album?: boolean;
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
        className={
          "relative h-72 w-72 mx-auto rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        }
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
          className={`transition-all duration-200 ${
            focused ? "blur-sm brightness-50" : ""
          }`}
          height={"320px"}
          width={"320px"}
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
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              transition: {
                duration: reduceMotion ? 0 : 0.2,
                ease: EASE_EXPO_OUT,
              },
            },
            hidden: {
              opacity: 0,
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
      <motion.div
        className="flex flex-row w-80 flex-wrap text-center justify-center text-lg md:opacity-0"
        whileHover={{
          opacity: 1,
          scale: 0.9,
          transition: { duration: 0.2, ease: EASE_EXPO_OUT },
        }}
        initial={{ opacity: 1, scale: 1 }}
      >
        {title}
      </motion.div>
    </motion.div>
  );
};

export default Disc;

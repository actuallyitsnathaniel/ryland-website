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
    <div className={`${className ?? ""} w-72 min-w-0 max-w-full text-xl`}>
      <div
        className="group relative"
        onMouseEnter={() => setFocused(true)}
        onMouseLeave={() => setFocused(false)}
      >
        <button
          type="button"
          aria-expanded={focused}
          aria-label={
            title ? `Show streaming links for ${title}` : "Show streaming links"
          }
          className="relative aspect-square w-full cursor-pointer overflow-hidden rounded-xl shadow-lg shadow-black/40 ring-1 ring-white/10 transition duration-200 hover:ring-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
          onClick={() => setFocused((open) => !open)}
        >
          <img
            className={`h-full w-full object-cover transition duration-200 ${
              focused ? "blur-sm brightness-50" : "group-hover:brightness-110"
            }`}
            src={artwork}
            alt={title ?? ""}
            loading={priority ? "eager" : "lazy"}
          />
        </button>
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-xl"
          initial="hidden"
          animate={focused ? "visible" : "hidden"}
          onClick={() => setFocused(false)}
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
      </div>
      {title ? (
        <p className="mt-3 text-balance text-center text-2xl tracking-[-0.02em]">
          {title}
        </p>
      ) : null}
    </div>
  );
};

export default Disc;

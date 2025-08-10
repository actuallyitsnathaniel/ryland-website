import { useState } from "react";
import { motion } from "framer-motion";
import MusicPlatformLinks from "./platform-links";

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
};

const Disc = ({
  className,
  appleMusicLink,
  spotifyLink,
  soundcloudLink,
  tidalLink,
  youtubeLink,
  webLink,
  album = false,
  artwork,
  title,
}: DiscType) => {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      className={`${className} text-8xl group p-3`}
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.2,
      }}
    >
      <motion.div
        className={"relative h-72 w-72 mx-auto"}
        onMouseLeave={() => {
          setFocused(false);
        }}
        onMouseEnter={() => setFocused(true)}
        onClick={() => {
          setFocused(!focused);
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
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
          loading="eager"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center overflow-clip"
          animate={focused ? "visible" : "hidden"}
          variants={{
            visible: {
              opacity: 1,
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              transition: { duration: 0.2, ease: "easeOut" },
            },
            hidden: {
              opacity: 0,
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 0)",
              transition: { duration: 0.15, ease: "easeIn" },
            },
          }}
        >
          <MusicPlatformLinks
            className="origin-center"
            {...{
              appleMusicLink,
              spotifyLink,
              soundcloudLink,
              tidalLink,
              youtubeLink,
              webLink,
              album,
            }}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-row w-80 flex-wrap text-center justify-center text-lg md:opacity-0"
        whileHover={{
          opacity: 1,
          scale: 0.9,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        initial={{ opacity: 1, scale: 1 }}
      >
        {title}
      </motion.div>
    </motion.div>
  );
};

export default Disc;

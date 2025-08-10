import { useState, useEffect, useMemo, useCallback } from "react";

import BGVideoDesktop from "../../assets/videos/catch-desktop.mp4";
import BGVideoMobile from "../../assets/videos/catch-mobile.mp4";

import { useLocation } from "react-router-dom";

const VideoBackground = () => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Debounced resize handler to prevent excessive re-renders
  const handleResize = useCallback(() => {
    const timeoutId = setTimeout(() => {
      setWindowWidth(window.innerWidth);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Memoize video source to prevent recalculation on every render
  const videoSource = useMemo(() => {
    return windowWidth < 822 ? BGVideoMobile : BGVideoDesktop;
  }, [windowWidth]);

  // Memoize className to prevent string concatenation on every render
  const videoClassName = useMemo(() => {
    return `fixed transition-all duration-200 w-full h-full object-cover ${
      location.pathname !== "/" ? "blur-sm brightness-75" : ""
    }`;
  }, [location.pathname]);

  return (
    <div id="video-wrapper" className={`bg-black -z-[1]`}>
      <video
        height={"auto"}
        width={"100%"}
        id="video"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        preload="metadata"
        className={videoClassName}
      >
        <source src={videoSource} type="video/MP4" />
      </video>
    </div>
  );
};

export default VideoBackground;

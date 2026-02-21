import { useEffect, useMemo, useCallback, useRef, useState } from "react";

import BGVideoDesktop from "../../assets/videos/catch-desktop.mp4";
import BGVideoMobile from "../../assets/videos/catch-mobile.mp4";

import { useLocation } from "react-router-dom";

const VideoBackground = () => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Set src after mount and trigger playback manually
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.src = videoSource;
    video.load();
    video.play().catch(() => {
      // Autoplay may be blocked by browser policy; silently ignore
    });
  }, [videoSource]);

  // Memoize className to prevent string concatenation on every render
  const videoClassName = useMemo(() => {
    return `fixed transition-all duration-200 w-full h-full object-cover ${
      location.pathname !== "/" ? "blur-sm brightness-75" : ""
    }`;
  }, [location.pathname]);

  return (
    <div id="video-wrapper" className={`bg-black -z-[1]`}>
      <video
        ref={videoRef}
        height={"auto"}
        width={"100%"}
        id="video"
        loop
        muted
        playsInline
        disablePictureInPicture
        preload="none"
        className={videoClassName}
        poster="/video-thumbnail.jpg"
      />
    </div>
  );
};

export default VideoBackground;

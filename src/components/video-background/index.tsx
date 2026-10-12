import { useEffect, useMemo, useRef, useState } from "react";

import BGVideoDesktop from "../../assets/videos/catch-desktop.mp4";
import BGVideoMobile from "../../assets/videos/catch-mobile.mp4";

import { useLocation } from "react-router-dom";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const VideoBackground = () => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [canPlay, setCanPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Debounced resize handler to prevent excessive re-renders
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(() => setWindowWidth(window.innerWidth), 100);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Wait until the page has loaded, then start the file when the browser is idle.
  // Reduced-motion users keep the poster and never download the video.
  useEffect(() => {
    if (prefersReducedMotion()) return;

    let idleId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | 0 = 0;
    const start = () => setCanPlay(true);
    const arm = () => {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(start);
      } else {
        timeoutId = setTimeout(start, 200);
      }
    };

    if (document.readyState === "complete") {
      arm();
    } else {
      window.addEventListener("load", arm, { once: true });
    }

    return () => {
      window.removeEventListener("load", arm);
      if (idleId) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  // Memoize video source to prevent recalculation on every render
  const videoSource = useMemo(() => {
    return windowWidth < 822 ? BGVideoMobile : BGVideoDesktop;
  }, [windowWidth]);

  // Set src after the page load and trigger playback manually
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canPlay) return;
    video.src = videoSource;
    video.load();
    video.play().catch(() => {
      // Autoplay may be blocked by browser policy; silently ignore
    });
  }, [canPlay, videoSource]);

  // Memoize className to prevent string concatenation on every render
  const videoClassName = useMemo(() => {
    return `fixed transition-all duration-200 w-full h-full object-cover ${
      location.pathname !== "/" ? "blur-sm brightness-75" : ""
    }`;
  }, [location.pathname]);

  return (
    <div id="video-wrapper" className="bg-black -z-[1]" aria-hidden="true">
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
        aria-hidden="true"
        className={videoClassName}
        poster="/video-thumbnail.webp"
      />
    </div>
  );
};

export default VideoBackground;

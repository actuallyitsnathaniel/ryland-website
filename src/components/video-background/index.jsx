import { useState, useEffect } from "react";

import BGVideoDesktop from "../../assets/videos/catch-desktop.mp4";
import BGVideoMobile from "../../assets/videos/catch-mobile.mp4";

import { useLocation } from "react-router-dom";

const VideoBackground = () => {
  const location = useLocation().pathname;

  const [windowDimension, setWindowDimension] = useState(null);
  const isMobile = windowDimension <= 822; // custom width for custom navbar

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        className={`fixed transition-all duration-200 w-full h-full object-cover ${
          location !== "/" && "blur-sm brightness-75"
        }`}
      >
        <source
          src={isMobile ? BGVideoMobile : BGVideoDesktop}
          type="video/MP4"
        />
      </video>
    </div>
  );
};

export default VideoBackground;

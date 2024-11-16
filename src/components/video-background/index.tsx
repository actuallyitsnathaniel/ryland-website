import { useState, useEffect } from "react";

import BGVideoDesktop from "../../assets/videos/catch-desktop.mp4";
import BGVideoMobile from "../../assets/videos/catch-mobile.mp4";

import { useLocation } from "react-router-dom";

const VideoBackground = () => {
  const location = useLocation().pathname;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVideoSource = () => {
    if (windowWidth < 822) {
      return BGVideoMobile;
    } else {
      return BGVideoDesktop;
    }
  };

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
        <source src={getVideoSource()} type="video/MP4" />
      </video>
    </div>
  );
};

export default VideoBackground;

import BGVideoMP4 from "../../assets/videos/stuck-at-home.mp4";
import BGVideoWEBM from "../../assets/videos/stuck-at-home.webm";

import { useLocation } from "react-router-dom";

const VideoBackground = () => {
  const location = useLocation().pathname;

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
        <source src={BGVideoMP4} type="video/MP4" />
        <source src={BGVideoWEBM} type="video/webm" />
      </video>
    </div>
  );
};

export default VideoBackground;

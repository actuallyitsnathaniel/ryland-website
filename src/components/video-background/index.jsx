import BGVideoMP4 from "../../assets/videos/stuck-at-home.mp4";
import BGVideoWEBM from "../../assets/videos/stuck-at-home.webm";

const VideoBackground = () => {
  return (
    <div id="video-wrapper" className={` bg-black -z-[1]`}>
      <video
        height={"auto"}
        width={"100%"}
        id="video"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className={`fixed w-full h-full object-cover`}
      >
        <source src={BGVideoMP4} type="video/MP4" />
        <source src={BGVideoWEBM} type="video/webm" />
      </video>
    </div>
  );
};

export default VideoBackground;

import BGVideoMP4 from "../../assets/videos/stuck-at-home.mp4";
import BGVideoWEBM from "../../assets/videos/stuck-at-home.webm";

const VideoBackground = () => {
  return (
    <div className="video-wrapper w-full h-full">
      <video
        height={"110%"}
        width={"auto"}
        id="video"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="object-cover w-full h-full blur-[1px]"
      >
        <source src={BGVideoMP4} type="video/MP4" />
        <source src={BGVideoWEBM} type="video/webm" />
      </video>
    </div>
  );
};

export default VideoBackground;

import BGVideoMP4 from "../../assets/videos/rylandEP_comp.mp4";
import BGVideoWEBM from "../../assets/videos/rylandEP_comp.webm";

function VideoBackground() {
  return (
    <div className="video-wrapper overflow-clip">
      <video
        height={"110%"}
        width={"auto"}
        id="video"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="video"
      >
        <source src={BGVideoMP4} type="video/MP4" />
        <source src={BGVideoWEBM} type="video/webm" />
      </video>
    </div>
  );
}

export default VideoBackground;

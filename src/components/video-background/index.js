import RylandBGVideo from "../../assets/videos/rylandEP_720.mp4";

function VideoBackground() {
  return (
    <div className="video-wrapper">
      <video
        src={RylandBGVideo}
        id="video"
        autoPlay
        loop
        muted
        className="video"
      />
    </div>
  );
}

export default VideoBackground;

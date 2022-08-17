import RylandBGVideo from "../../assets/videos/rylandEP_comp.mp4";

function VideoBackground() {
  return (
    <div className="video-wrapper">
      <video
        src={RylandBGVideo}
        id="video"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="video"
      />
    </div>
  );
}

export default VideoBackground;

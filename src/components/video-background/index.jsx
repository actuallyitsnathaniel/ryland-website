import BGVideoMP4 from "../../assets/videos/stuck-at-home.mp4";
import BGVideoWEBM from "../../assets/videos/stuck-at-home.webm";

const VideoBackground = () => {
  const elias = "scale-[3.5]";
  const jake = "scale-[2]";
  const tom = "";
  const ron = "";
  const nate = "";

  const aboutUs = false;
  return (
    <div
      id="video-wrapper"
      className={`relative flex min-w-full z-[-1] w-full min-h-full bg-black`}
    >
      <video
        height={"auto"}
        width={"100%"}
        id="video"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className={`fixed blur-[0px] min-h-full min-w-full duration-700 ease-in-out object-cover ${
          aboutUs ? "ml-[1000px] scale-[3.5]" : "fixed "
        }`}
      >
        <source src={BGVideoMP4} type="video/MP4" />
        <source src={BGVideoWEBM} type="video/webm" />
      </video>
    </div>
  );
};

export default VideoBackground;

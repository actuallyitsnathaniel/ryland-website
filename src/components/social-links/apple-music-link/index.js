import appleMusic from "../../../assets/images/icons/music-platforms/apple-music.svg";

function AppleMusicLink() {
  return (
    <a
      className="p-3"
      href="https://music.apple.com/us/artist/ryland/1472845950"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={appleMusic}
        className="transition-all duration-75 h-[52px] hover:scale-110"
        alt="apple-music-alt"
      />
    </a>
  );
}

export default AppleMusicLink;

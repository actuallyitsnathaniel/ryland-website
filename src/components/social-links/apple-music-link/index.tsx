import AppleMusicSVG from "../../../assets/images/icons/music-platforms/apple-music.svg";
import { iconLinkClass } from "../../../util/util";

const AppleMusicLink = () => {
  return (
    <a
      className={iconLinkClass}
      href="https://music.apple.com/us/artist/ryland/1472845950"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ryland on Apple Music"
    >
      <img
        src={AppleMusicSVG}
        className="h-10 w-auto rounded-lg transition duration-200 group-hover:bg-gradient-to-b group-hover:from-[#fa57c1] group-hover:via-[#b166cc] group-hover:to-[#69a6f9]"
        alt=""
      />
    </a>
  );
};

export default AppleMusicLink;

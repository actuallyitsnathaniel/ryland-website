// Icons
import appleMusic from "../../../assets/images/icons/music-platforms/apple-music.svg";
import spotify from "../../../assets/images/icons/music-platforms/spotify.svg";
import tidal from "../../../assets/images/icons/music-platforms/tidal.svg";
import youtube from "../../../assets/images/icons/music-platforms/youtube.svg";

const MusicPlatformLink = (props) => {
  return (
    <div>
      <a href={props.musicLink} rel="noopener noreferrer" target="_blank">
        <img
          className="transition-all duration-75 h-[75px] hover:scale-110"
          alt="music-link"
          src={props.svg}
        />
      </a>
    </div>
  );
};

function AllLinks(props) {
  return (
    <div
      className={`absolute grid grid-cols-2 justify-items-center items-center h-[305px] w-[305px] -translate-x-1 -translate-y-1 transition-opacity opacity-0 group p-4
          ${
            props.expanded === props.i
              ? "bg-black bg-opacity-50 backdrop-blur-md opacity-100"
              : ""
          }`}
    >
      <MusicPlatformLink musicLink={props.appleMusicLink} svg={appleMusic} />

      <MusicPlatformLink musicLink={props.spotifyLink} svg={spotify} />

      <MusicPlatformLink musicLink={props.tidalLink} svg={tidal} />

      <MusicPlatformLink musicLink={props.youtubeLink} svg={youtube} />
    </div>
  );
}

export default AllLinks;

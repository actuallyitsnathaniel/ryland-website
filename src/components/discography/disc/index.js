import { useState } from "react";

import MusicPlatformLink from "../music-platform-link";

// Icons
import appleMusic from "../../../assets/images/icons/music-platforms/apple-music.svg";
import spotify from "../../../assets/images/icons/music-platforms/spotify.svg";
import tidal from "../../../assets/images/icons/music-platforms/tidal.svg";
import youtube from "../../../assets/images/icons/music-platforms/youtube.svg";

function Disc(props) {
  const [expanded, setExpanded] = useState(-1);

  const setActiveDisc = (i) => {
    if (i === expanded) {
      setExpanded(-1);
    } else {
      setExpanded(i);
    }
  };

  console.log(expanded);

  return (
    <div
      onClick={() => {
        setActiveDisc(props.i);
      }}
      className="transition-scale duration-100 text-8xl p-6 hover:scale-110 group"
    >
      <div className="h-[300px] w-[300px]">
        <div
          className={`absolute grid grid-cols-2 justify-items-center items-center h-[305px] w-[305px] -translate-x-1 -translate-y-1 transition-opacity opacity-0 group p-4
            ${
              expanded === props.i
                ? "bg-black bg-opacity-50 backdrop-blur-md opacity-100"
                : ""
            }`}
        >
          <MusicPlatformLink
            i={props.i}
            musicLink={props.appleMusicLink}
            svg={appleMusic}
          />

          <MusicPlatformLink
            i={props.i}
            musicLink={props.spotifyLink}
            svg={spotify}
          />

          <MusicPlatformLink
            i={props.i}
            musicLink={props.tidalLink}
            svg={tidal}
          />

          <MusicPlatformLink
            i={props.i}
            musicLink={props.youtubeLink}
            svg={youtube}
          />
        </div>
        <img className="h-[300px]" src={props.artwork} alt={props.title} />
      </div>
      <div className="flex flex-row w-[300px] flex-wrap text-center justify-center transition-scale duration-100 origin-top text-xl pt-2 scale-0 group-hover:scale-90">
        {props.title}
      </div>
    </div>
  );
}

export default Disc;

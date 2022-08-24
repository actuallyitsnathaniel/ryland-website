import React, { useState } from "react";

// Albums
import portrait from "../../assets/images/discography/LPs/Portrait-LP_600x600bb.jpeg";

// EPs
import lashingOut from "../../assets/images/discography/Singles_EPs/Lashing-Out-EP_600x600bb.jpeg";
import itinerary from "../../assets/images/discography/Singles_EPs/Itinerary-EP_600x600bb.jpeg";

// Singles
import iblfawn from "../../assets/images/discography/Singles_EPs/I'veBeenLooking-Single_600x600bb.jpeg";
import karma from "../../assets/images/discography/Singles_EPs/Karma-Single_600x600bb.jpeg";
import stairwell from "../../assets/images/discography/Singles_EPs/Stairwell-Single_600x600bb.jpeg";
import talking from "../../assets/images/discography/Singles_EPs/Talking-Single_600x600bb.jpeg";

// Icons
import appleMusic from "../../assets/images/icons/music-platforms/apple-music.svg";
import spotify from "../../assets/images/icons/music-platforms/spotify.svg";
import tidal from "../../assets/images/icons/music-platforms/tidal.svg";
import youtube from "../../assets/images/icons/music-platforms/youtube.svg";

function Disc(props) {
  return (
    <div
      onClick={() => {
        props.onClick();
      }}
      className="transition-scale duration-100 text-8xl p-6 hover:scale-110 group"
    >
      <div className="h-[300px] w-[300px]">
        <div
          className={`absolute grid grid-cols-2 justify-items-center items-center h-[305px] w-[305px] -translate-x-1 -translate-y-1 transition-opacity opacity-0 group p-4
          ${
            props.expanded === props.i
              ? "bg-black bg-opacity-50 backdrop-blur-md opacity-100"
              : ""
          }`}
        >
          <img
            className="transition-all duration-75 h-[75px] hover:scale-110"
            alt="apple-music"
            src={appleMusic}
            href={props.appleMusicLink}
          />
          <img
            className="transition-all duration-75 h-[75px] hover:scale-110"
            alt="spotify"
            src={spotify}
            href={props.spotifyLink}
          />
          <img
            className="transition-all duration-75 h-[75px] hover:scale-110"
            alt="tidal"
            src={tidal}
            href={props.tidalLink}
          />
          <img
            className="transition-all duration-75 h-[75px] hover:scale-110"
            alt="youtube"
            src={youtube}
            href={props.youtubeLink}
          />
        </div>
        <img className="h-[300px]" src={props.artwork} alt={props.title} />
      </div>
      <div className="flex flex-row w-[300px] flex-wrap text-center justify-center transition-scale duration-100 origin-top text-lg scale-0 group-hover:scale-90">
        {props.title}
      </div>
    </div>
  );
}

function Discography() {
  const [expanded, setExpanded] = useState(-1);

  const setActiveDisc = (i) => {
    if (i === expanded) {
      setExpanded(-1);
    } else {
      setExpanded(i);
    }
  };

  return (
    <div>
      <div>
        <h2 className="flex text-6xl font-semibold italic justify-center p-10">
          Albums
        </h2>
        <div className="flex flex-row flex-wrap w-full justify-center">
          <Disc
            artwork={portrait}
            title={"Portrait"}
            expanded={expanded}
            i={0}
            onClick={() => {
              setActiveDisc(0);
            }}
          />
        </div>
      </div>

      <div>
        <h2 className="flex text-6xl font-semibold italic justify-center p-10">
          Singles/EPs
        </h2>
        <div className="flex flex-wrap w-full justify-center">
          <Disc
            artwork={talking}
            title="Talking - Single"
            expanded={expanded}
            i={1}
            onClick={() => {
              setActiveDisc(1);
            }}
          />
          <Disc
            artwork={karma}
            title="Karma - Single"
            expanded={expanded}
            i={2}
            onClick={() => {
              setActiveDisc(2);
            }}
          />
          <Disc
            artwork={iblfawn}
            title={`I've Been Looking For A While Now - Single`}
            expanded={expanded}
            i={3}
            onClick={() => {
              setActiveDisc(3);
            }}
          />
          <Disc
            artwork={lashingOut}
            title="Lashing Out - EP"
            expanded={expanded}
            i={4}
            onClick={() => {
              setActiveDisc(4);
            }}
          />
          <Disc
            artwork={stairwell}
            title="Stairwell - Single"
            expanded={expanded}
            i={5}
            onClick={() => {
              setActiveDisc(5);
            }}
          />
          <Disc
            artwork={itinerary}
            title="Itinerary - EP"
            expanded={expanded}
            i={6}
            onClick={() => {
              setActiveDisc(6);
            }}
          />
        </div>
      </div>
    </div>
  );
}

Discography.Disc = Disc;

export default Discography;

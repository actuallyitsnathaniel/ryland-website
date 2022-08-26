import React, { useState } from "react";
// import Disc from "./disc";

// Albums
import portrait from "../../assets/images/discography/LPs/Portrait-LP_600x600bb.jpeg";

// EPs
import lashingOut from "../../assets/images/discography/Singles_EPs/Lashing-Out-EP_600x600bb.jpeg";
import itinerary from "../../assets/images/discography/Singles_EPs/Itinerary-EP_600x600bb.jpeg";
import untitled from "../../assets/images/discography/Singles_EPs/untitled.jpeg";

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

function MusicPlatformLink(props) {
  return (
    <a
      className={`${props.expanded === props.i ? "block" : "hidden"}`}
      href={props.musicLink}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        className="transition-all duration-75 h-[75px] hover:scale-110"
        alt="music-link"
        src={props.svg}
      />
    </a>
  );
}

function Disc(props) {
  const [expanded, setExpanded] = useState(-1);

  const setActiveDisc = (i) => {
    if (i === expanded) {
      setExpanded(-1);
    } else {
      setExpanded(i);
    }
  };
  console.log(props.expanded);

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
            expanded={expanded}
            i={props.i}
            musicLink={props.appleMusicLink}
            svg={appleMusic}
          />

          <MusicPlatformLink
            expanded={expanded}
            i={props.i}
            musicLink={props.spotifyLink}
            svg={spotify}
          />

          <MusicPlatformLink
            expanded={expanded}
            i={props.i}
            musicLink={props.tidalLink}
            svg={tidal}
          />

          <MusicPlatformLink
            expanded={expanded}
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

function Discography() {
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
            appleMusicLink={
              "https://music.apple.com/us/album/portrait/1556566677"
            }
            spotifyLink={
              "https://open.spotify.com/album/1YRrSespqvZu2iYa7WSM4X"
            }
            tidalLink={"https://tidal.com/browse/album/175851104"}
            youtubeLink={
              "https://www.youtube.com/watch?v=j9_KZDcwg6I&list=OLAK5uy_lP4KNWsjACvqILi5xZWnPrN4s7nxZZrH8&ab_channel=Ryland-Topic"
            }
            i={0}
          />
        </div>
      </div>

      <div>
        <h2 className="flex text-6xl font-semibold italic justify-center p-10">
          Singles/EPs
        </h2>
        <div className="flex flex-wrap w-full justify-center">
          <div className="blur-sm">
            <Disc
              artwork={untitled}
              title="????"
              i={7}
              appleMusicLink
              spotifyLink
              tidalLink
              youtubeLink
            />
          </div>

          <Disc
            artwork={talking}
            title="Talking - Single"
            appleMusicLink={
              "https://music.apple.com/us/album/talking-single/1550695263"
            }
            spotifyLink={
              "https://open.spotify.com/album/1tFU6vCOBndpsHS4G0Bk6b"
            }
            tidalLink={"https://tidal.com/browse/album/171031166"}
            youtubeLink={
              "https://www.youtube.com/watch?v=3nYxfzVerys&ab_channel=Ryland-Topic"
            }
            i={1}
          />
          <Disc
            artwork={karma}
            title="Karma - Single"
            appleMusicLink={
              "https://music.apple.com/us/album/karma-single/1540025669"
            }
            spotifyLink={
              "https://open.spotify.com/album/7BFWk2MnsBydI9FVNtokgJ"
            }
            tidalLink={"https://tidal.com/browse/album/161942070"}
            youtubeLink={
              "https://www.youtube.com/watch?v=vddP2nWvJ30&ab_channel=Ryland-Topic"
            }
            i={2}
          />
          <Disc
            artwork={iblfawn}
            title={`I've Been Looking For A While Now - Single`}
            appleMusicLink={
              "https://music.apple.com/us/album/ive-been-looking-for-a-while-now-single/1537916310"
            }
            spotifyLink={
              "https://open.spotify.com/album/1xEbTebOcFQJpl5sEVJ6p8?si=JZlTs1BNT0iz0oxpI0CDrQ"
            }
            tidalLink={"https://tidal.com/browse/album/160222795"}
            youtubeLink={"https://www.youtube.com/watch?v=0En7Fc5NMmo"}
            i={3}
          />
          <Disc
            artwork={lashingOut}
            title="Lashing Out - EP"
            appleMusicLink={
              "https://music.apple.com/us/album/lashing-out-ep/1513245392"
            }
            spotifyLink={
              "https://open.spotify.com/album/3cV2NG0rtCRqjeQuB0jrPi"
            }
            tidalLink={"https://tidal.com/browse/album/141435524"}
            youtubeLink={
              "https://www.youtube.com/watch?v=iFaFUDRdQM8&list=OLAK5uy_lc2utY1UM_LNoogjtn98ubuCFW_xc2Cjo"
            }
            i={4}
          />
          <Disc
            artwork={stairwell}
            title="Stairwell - Single"
            appleMusicLink={
              "https://music.apple.com/us/album/stairwell-single/1482802988"
            }
            spotifyLink={
              "https://open.spotify.com/album/6dbexdk9Vzpr0kPYqp36QR"
            }
            tidalLink={"https://tidal.com/browse/album/119716422"}
            youtubeLink={"https://youtu.be/DB4k8_zpkJw"}
            i={5}
          />
          <Disc
            artwork={itinerary}
            title="Itinerary - EP"
            appleMusicLink={
              "https://music.apple.com/us/album/itinerary-ep/1473164315"
            }
            spotifyLink={
              "https://open.spotify.com/album/2I19mObRLLNKzm2HCHJf42?si=VnLqR5ZQQDqwfyyW__gDTA"
            }
            tidalLink={"https://tidal.com/browse/album/113394980"}
            youtubeLink={
              "https://www.youtube.com/watch?v=7YUkplOVhtM&list=OLAK5uy_nrGLK171l7gdvuUYFm5wBp3KdVRm1M33w"
            }
            i={6}
          />
        </div>
      </div>
    </div>
  );
}

Discography.Disc = Disc;

export default Discography;

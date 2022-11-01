import React from "react";
import { Link } from "react-router-dom";

import InstagramLogo from "../../components/social-links/instagram-link";
import GmailLogo from "../../components/social-links/gmail-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLink from "../../components/social-links/youtube-link";

import Disc from "../../components/discography/disc";

import rylandBed from "../../assets/images/icons/ryland-bed/ryland-bed.svg";
import youshouldknow from "../../assets/images/discography/Singles_EPs/You-Should-Know-EP.jpeg";

function Links() {
  return (
    <main className="flex justify-center min-h-screen text-white">
      <div className="space-y-3 pb-4 grid">
        <Link exact to={"/home"}>
          <img
            className="transition item-center duration-75 h-60 my-10 hover:translate-y-1 hover:scale-115"
            src={rylandBed}
            alt="ryland-bed"
          />
        </Link>

        <div className="transform-gpu scale-100 -m-5">
          <p className="text-3xl text-center font-semibold p-0">
            You Should Know - EP
          </p>
          <Disc
            artwork={youshouldknow}
            title=""
            i={7}
            appleMusicLink={""}
            spotifyLink={
              "https://open.spotify.com/album/3dcyqNJBbex17eICVzfi4S?si=5FXaa4i5Tz6JzCWZX1u6gg"
            }
            tidalLink={"https://tidal.com/browse/album/254309190"}
            youtubeLink={
              "https://www.youtube.com/playlist?list=OLAK5uy_k68rFLA0eSnvoyseygxYBBdH2nrWp9lu0"
            }
          />
          <p className="text-center text-3xl font-bold pt-0 m-0">OUT NOW!!</p>
        </div>

        <div className="flex flex-row items-center text-4xl">
          <SpotifyLink /> Spotify
        </div>
        <div className="flex flex-row  items-center text-4xl">
          <AppleMusic /> Apple Music
        </div>
        <div className="flex flex-row items-center text-center text-4xl">
          <YoutubeLink /> Youtube
        </div>
        <div className="flex flex-row items-center text-4xl">
          <InstagramLogo /> Instagram
        </div>
        <div className="flex flex-row  items-center text-center text-4xl">
          <GmailLogo /> Gmail
        </div>
      </div>
    </main>
  );
}

export default Links;

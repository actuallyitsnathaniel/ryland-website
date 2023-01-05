import React from "react";
import { Link } from "react-router-dom";

import InstagramLogo from "../../components/social-links/instagram-link";
import GmailLogo from "../../components/social-links/gmail-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLink from "../../components/social-links/youtube-link";

import rylandBed from "../../assets/images/icons/ryland-bed/ryland-bed.svg";
import Jan19 from "../../components/show-link/jan19";

function Links() {
  return (
    <main className="flex flex-wrap mx-auto w-fit min-h-screen text-white">
      <div className="space-y-3 pb-4">
        <Link exact to={"/home"}>
          <img
            className="mx-auto transition duration-75 h-56 my-10 hover:translate-y-1 hover:scale-125"
            src={rylandBed}
            alt="ryland-bed"
          />
        </Link>
        <h1 className="text-4xl text-center font-semibold">Links</h1>
        <div className="h-11" />
        <Jan19 />

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

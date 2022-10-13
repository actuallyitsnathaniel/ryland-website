import React from "react";
import { Link } from "react-router-dom";

import InstagramLogo from "../../components/social-links/instagram-link";
import GmailLogo from "../../components/social-links/gmail-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";

import rylandBed from "../../assets/images/icons/ryland-bed/ryland-bed.svg";

function Links() {
  return (
    <main className="flex flex-wrap justify-center min-h-screen text-white">
      <div>
        <Link to={"/home"}>
          <img className="w-56 my-16" src={rylandBed} alt="ryland-bed" />
        </Link>
        <div className="flex flex-row items-center text-3xl">
          <SpotifyLink /> Spotify
        </div>
        <div className="flex flex-row items-center text-3xl">
          <AppleMusic /> Apple Music
        </div>
        <div className="flex flex-row items-center text-3xl">
          <InstagramLogo /> Instagram
        </div>
        <div className="flex flex-row items-center text-center text-3xl">
          <GmailLogo /> Gmail
        </div>
      </div>
    </main>
  );
}

export default Links;

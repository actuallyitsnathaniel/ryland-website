import React from "react";
import { Link } from "react-router-dom";

import InstagramLogo from "../../components/social-links/instagram-link";
import GmailLogo from "../../components/social-links/gmail-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLink from "../../components/social-links/youtube-link";
import ShowLink from "../../components/show-link";
// import Disc from "../../components/discography/disc";

import rylandBed from "../../assets/images/icons/ryland-bed/ryland-bed.svg";
import show14th from "../../assets/images/thumbnails/brodyn_jla_ryland.png";
// import youshouldknow from "../../assets/images/discography/Singles_EPs/You-Should-Know-EP.jpeg";

function Links() {
  return (
    <main className="flex flex-wrap justify-center min-h-screen text-white">
      <div className="space-y-3 pb-4">
        <Link exact to={"/home"}>
          <img
            className="transition duration-75 h-56 my-10 hover:translate-y-1 hover:scale-125"
            src={rylandBed}
            alt="ryland-bed"
          />
        </Link>
        <ShowLink
          thumbnail={show14th}
          link={
            "https://dice.fm/event/7eyvb-brodyn-john-lowell-anderson-ryland-19th-jan-the-silverlake-lounge-los-angeles-tickets?_branch_match_id=1120861200082607989&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1c81T0kzNzU3NzFJNgEATz3tRyEAAAA%3D"
          }
          venue={"Silverlake Lounge"}
          date={"January 14th"}
          artists={"Brodyn | John Lowell Anderson | Ryland"}
          alt={"show-14th"}
        />

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

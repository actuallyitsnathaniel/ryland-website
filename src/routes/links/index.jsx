import { Link, useLocation } from "react-router-dom";

import InstagramLogo from "../../components/social-links/instagram-link";
import GmailLogo from "../../components/social-links/gmail-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLink from "../../components/social-links/youtube-link";

import rylandBed from "../../assets/images/icons/ryland-bed/ryland-bed.svg";
import Newsletter from "../../components/newsletter";

const Links = () => {
  let location = useLocation().hash;
  return (
    <main
      className={`${
        location.includes("links") ? "flex" : "hidden"
      } flex-col mx-auto w-fit text-white px-8 gap-10`}
    >
      <Link exact to={"/"}>
        <img
          className="mx-auto max-w-[275px] transition duration-75 p-10 scale-125"
          src={rylandBed}
          alt="ryland-bed"
        />
      </Link>
      <div className="flex flex-wrap mx-auto gap-4 justify-around items-center">
        <SpotifyLink />
        <InstagramLogo />
        <AppleMusic />
        <YoutubeLink />
      </div>
      <h1 className="hidden p-3 text-[150%] md:text-5xl  whitespace-nowrap underline underline-offset-8">
        <div className="h-8" />
        Upcoming Shows
      </h1>

      <Newsletter />
    </main>
  );
};

export default Links;

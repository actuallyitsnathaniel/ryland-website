import { Link } from "react-router-dom";

import InstagramLogo from "../../components/social-links/instagram-link";
import GmailLogo from "../../components/social-links/gmail-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLink from "../../components/social-links/youtube-link";

import rylandBed from "../../assets/images/icons/ryland-bed/ryland-bed.svg";
import Newsletter from "../../components/newsletter";

const Links = () => {
  return (
    <main className="flex flex-col mx-auto w-fit -mt-14 text-white px-8">
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
      <h1 className="hidden p-3 text-[150%] md:text-5xl font-semibold whitespace-nowrap underline underline-offset-8">
        <div className="h-8" />
        Upcoming Shows
      </h1>

      <Newsletter />
    </main>
  );
};

export default Links;

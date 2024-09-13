import { Link } from "react-router-dom";

import InstagramLogo from "../../components/social-links/instagram-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLink from "../../components/social-links/youtube-link";

// import Sep4_2024 from "../../components/show-link/sep4_2024";

import rylandBed from "../../assets/images/icons/ryland-bed/ryland-bed.svg";
import Newsletter from "../../components/newsletter";

const Links = () => {
  return (
    <main className="backdrop-blur-sm">
      <div className="flex flex-col px-8 gap-4">
        <Link exact="true" to={"/"}>
          <img
            className="mx-auto max-w-[275px] p-2 mt-5"
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
        {/* <div className="flex flex-col mx-auto gap-4 justify-around items-center">
          <h1 className="p-3 text-4xl whitespace-nowrap underline underline-offset-8">
            <div className="h-8" />
            Upcoming Shows
          </h1>
          <div className="md:p-3">
            <Sep4_2024 />
          </div>
        </div> */}

        <div className="">
          <Newsletter />
        </div>
      </div>
    </main>
  );
};

export default Links;

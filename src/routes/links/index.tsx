import { Link } from "react-router-dom";
import SEO from "../../components/seo";

import InstagramLogo from "../../components/social-links/instagram-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLink from "../../components/social-links/youtube-link";

// import Sep4_2024 from "../../components/show-link/sep4_2024";
import StuckAtHome from "../../assets/images/discography/Singles_EPs/stuck-at-home_600x600bb.jpg";

import rylandBed from "../../assets/images/icons/ryland-bed/ryland-bed.svg";
import Newsletter from "../../components/newsletter";

const Links = () => {
  return (
    <main className="backdrop-blur-sm">
      <SEO
        title="Links"
        description="Connect with Ryland on Spotify, Instagram, Apple Music, and YouTube. Follow us and stay updated with our latest releases."
        url="https://www.weareryland.com/links"
      />
      <h1 className="sr-only">Ryland Links - Connect with Us</h1>
      <div className="flex flex-col px-8 gap-10 items-center">
        <Link to={"/"}>
          <img
            className="mx-auto w-[275px] max-w-[275px] p-2 mt-5"
            src={rylandBed}
            alt="ryland-bed"
          />
        </Link>
        <a
          href="https://distrokid.com/hyperfollow/ryland/stuck-at-home"
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-col justify-center outline w-72 h-min p-4 rounded-lg bg-gray-500 bg-opacity-40"
        >
          <img
            src={StuckAtHome}
            alt="stuck-at-home-single"
            className="object-scale-down p-2"
          />
          <button className="text-xl">pre-save "stuck at home"</button>
        </a>
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
        <div className="flex flex-wrap mx-auto gap-4 justify-around items-center">
          <SpotifyLink />
          <InstagramLogo />
          <AppleMusic />
          <YoutubeLink />
        </div>
      </div>
    </main>
  );
};

export default Links;

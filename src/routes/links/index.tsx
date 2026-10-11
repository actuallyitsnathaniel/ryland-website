import { Link } from "react-router-dom";
import SEO from "../../components/seo";

import InstagramLogo from "../../components/social-links/instagram-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLink from "../../components/social-links/youtube-link";

import StuckAtHome from "../../assets/images/discography/Singles_EPs/stuck-at-home_600x600bb.jpg";

import rylandBed from "../../assets/images/icons/ryland-bed/ryland-bed.svg";
import Newsletter from "../../components/newsletter";
import { pageInset, pillPrimary, sectionTitle } from "../../util/util";

const Links = () => {
  return (
    <main
      className={`flex w-full flex-col items-center gap-10 text-xl leading-normal text-white ${pageInset}`}
    >
      <SEO
        title="Links - Connect with Ryland | Social Media & Streaming"
        description="Connect with Ryland on Spotify, Apple Music, YouTube, and Instagram. Follow us for new music releases, tour dates, and exclusive content from our Los Angeles indie rock band."
        url="https://www.weareryland.com/links"
      />
      <h1 className="sr-only">Ryland Links - Connect with Us</h1>
      <Link
        to="/"
        className="inline-flex rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
      >
        <img className="h-auto w-48" src={rylandBed} alt="Ryland" />
      </Link>

      <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-3 lg:gap-x-12">
        <section
          aria-labelledby="latest-heading"
          className="flex min-w-0 flex-col items-center gap-6 lg:col-span-1 lg:border-r lg:border-white/15 lg:pr-12"
        >
          <h2 id="latest-heading" className={sectionTitle}>
            Latest
          </h2>
          <a
            href="https://distrokid.com/hyperfollow/ryland/stuck-at-home"
            rel="noopener noreferrer"
            target="_blank"
            className="group flex w-full max-w-xs cursor-pointer flex-col items-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
          >
            <img
              src={StuckAtHome}
              alt="Stuck At Home single artwork"
              className="aspect-square w-full rounded-xl object-cover shadow-lg shadow-black/40 ring-1 ring-white/10 transition duration-200 group-hover:brightness-110 group-hover:ring-white/30"
            />
            <p className="mt-4 text-balance tracking-[-0.02em]">Stuck At Home</p>
            <p className="mt-1 text-white/60">Single</p>
            <span className={`${pillPrimary} mt-5 group-hover:bg-yellow-500`}>
              Pre-save
            </span>
          </a>
        </section>

        <div className="h-px w-full bg-white/15 lg:hidden" aria-hidden="true" />

        <div className="flex min-w-0 flex-col items-center gap-10 lg:col-span-2">
          <Newsletter />
          <section
            aria-labelledby="follow-heading"
            className="flex flex-col items-center gap-4"
          >
            <h2 id="follow-heading" className={sectionTitle}>
              Follow
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <SpotifyLink />
              <InstagramLogo />
              <AppleMusic />
              <YoutubeLink />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Links;

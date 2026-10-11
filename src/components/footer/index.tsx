import { Link, useLocation } from "react-router-dom";

import SocialLinks from "../social-links";

const Footer = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Ryland",
    genre: "Indie Rock",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
    email: "weareryland@gmail.com",
    url: "https://www.weareryland.com",
    sameAs: [
      "https://www.instagram.com/weareryland",
      "https://open.spotify.com/artist/3Ekf9P1XRqjP3MBwl6iFVT",
      "https://music.apple.com/us/artist/ryland/1472845950",
      "https://www.youtube.com/@weareryland",
      "https://music.youtube.com/channel/UChjPqJxxT2qSo5fDXlUXRLA",
    ],
  };

  const isHomePage = useLocation().pathname === "/";

  return (
    <footer
      id="footer"
      className="mt-auto w-full pt-4 text-lg leading-normal text-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <div className="py-3">
        <div className="sm:hidden flex justify-center">
          <SocialLinks />
        </div>
        <div className="flex flex-col items-center gap-3 px-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <p className="max-w-prose text-lg text-white/60 md:max-w-xl">
            Ryland's music is not licensed for AI or machine learning training.
            Any violation of this policy will be pursued to the fullest extent of
            the law.{" "}
            <Link
              to="/usage-and-ai-policy"
              className="inline-flex min-h-11 cursor-pointer items-center text-orange-400 underline underline-offset-4 transition-colors duration-200 hover:text-orange-300"
            >
              Usage &amp; AI Policy
            </Link>
          </p>
          <div className="text-lg text-white/60 md:shrink-0 md:text-right">
            {isHomePage && (
              <address className="mb-3 hidden not-italic md:block">
                <p>Ryland, Los Angeles, CA</p>
                <a
                  href="mailto:weareryland@gmail.com"
                  className="inline-flex min-h-11 cursor-pointer items-center underline underline-offset-4 transition-colors duration-200 hover:text-white"
                >
                  weareryland@gmail.com
                </a>
              </address>
            )}
            <p>Copyright © {new Date().getFullYear()} Ryland</p>
            <p className="mt-1">
              powered by{" "}
              <a
                className="inline-flex min-h-11 cursor-pointer items-center underline underline-offset-4 transition-colors duration-200 hover:text-white"
                href="mailto:nathanielrbowman@gmail.com"
              >
                nathaniel bowman
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

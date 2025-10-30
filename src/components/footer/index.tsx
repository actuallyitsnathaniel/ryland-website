import SocialLinks from "../social-links";

const Footer = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Ryland",
    "genre": "Indie Rock",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "email": "weareryland@gmail.com",
    "url": "https://www.weareryland.com",
    "sameAs": [
      "https://www.instagram.com/weare.ryland",
      "https://open.spotify.com/artist/3Ekf9P1XRqjP3MBwl6iFVT",
      "https://music.apple.com/us/artist/ryland/1472845950",
      "https://www.youtube.com/@weareryland"
    ]
  };

  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';

  return (
    <footer
      id="footer"
      className="grid text-md text-white w-full text-center pt-4 mt-auto bottom-0"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="py-3">
        <div className="sm:hidden flex justify-center">
          <SocialLinks />
        </div>
        {isHomePage && (
          <address className="hidden md:block not-italic fixed bottom-4 right-4 text-xs text-right">
            <p>Ryland - Los Angeles, CA</p>
            <a href="mailto:weareryland@gmail.com" className="underline">
              weareryland@gmail.com
            </a>
          </address>
        )}
        <p className="grid md:text-md">
          Copyright © {new Date().getFullYear()} Ryland
          <p>
            powered by&nbsp;
            <a
              className="underline underline-offset-8 "
              href="mailto:nathanielrbowman@gmail.com"
            >
              nathaniel bowman
            </a>
          </p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

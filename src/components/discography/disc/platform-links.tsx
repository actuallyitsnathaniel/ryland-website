// Icons
import appleMusic from "/src/assets/images/icons/music-platforms/apple-music.svg";
import spotify from "/src/assets/images/icons/music-platforms/spotify.svg";
import soundcloud from "/src/assets/images/icons/music-platforms/soundcloud.svg";
import youtube from "/src/assets/images/icons/music-platforms/youtube.svg";
import tidal from "/src/assets/images/icons/music-platforms/tidal.svg";
import hyperlinkIcon from "/src/assets/images/icons/shop-icon.svg";

const Link = ({
  href,
  image,
  label,
}: {
  href: string;
  image: string;
  label: string;
}) => {
  return (
    <a
      href={href}
      className="flex p-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        className={"transition-all duration-75 md:hover:scale-110"}
        height={"75px"}
        width={"75px"}
        alt={label}
        src={image}
      />
    </a>
  );
};

type MusicPlatformLinksType = {
  className: string;
  title?: string;
  spotifyLink?: string;
  appleMusicLink?: string;
  soundcloudLink?: string;
  tidalLink?: string;
  webLink?: string; // ponytail: kept for future web/merch releases
  youtubeLink?: string;
};

const MusicPlatformLinks = ({
  className,
  title,
  spotifyLink,
  appleMusicLink,
  soundcloudLink,
  tidalLink,
  youtubeLink,
  webLink,
}: MusicPlatformLinksType) => {
  const links = [
    { href: spotifyLink, image: spotify, platform: "Spotify" },
    { href: appleMusicLink, image: appleMusic, platform: "Apple Music" },
    { href: soundcloudLink, image: soundcloud, platform: "SoundCloud" },
    { href: tidalLink, image: tidal, platform: "Tidal" },
    { href: youtubeLink, image: youtube, platform: "YouTube" },
    { href: webLink, image: hyperlinkIcon, platform: "the web" },
  ];

  return (
    <div
      className={`absolute flex flex-wrap justify-around
      ${className} h-72 w-72 items-center
      `}
    >
      {links
        .filter((link) => link.href)
        .map(({ href, image, platform }) => (
          <Link
            key={platform}
            href={href as string}
            image={image}
            label={
              title ? `Listen to ${title} on ${platform}` : `Listen on ${platform}`
            }
          />
        ))}
    </div>
  );
};

export default MusicPlatformLinks;

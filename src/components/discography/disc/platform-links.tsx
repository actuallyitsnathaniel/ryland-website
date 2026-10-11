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
      className="group flex h-full w-full cursor-pointer items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
      rel="noopener noreferrer"
      target="_blank"
      onClick={(event) => event.stopPropagation()}
    >
      <img
        className="h-20 w-20 object-contain transition duration-200 group-hover:brightness-110"
        alt={label}
        src={image}
      />
    </a>
  );
};

type MusicPlatformLinksType = {
  title?: string;
  spotifyLink?: string;
  appleMusicLink?: string;
  soundcloudLink?: string;
  tidalLink?: string;
  webLink?: string; // ponytail: kept for future web/merch releases
  youtubeLink?: string;
};

const MusicPlatformLinks = ({
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
    <div className="grid h-full w-full grid-cols-2 grid-rows-2">
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

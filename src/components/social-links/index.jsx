import InstagramLogo from "./instagram-link";
import GmailLogo from "./gmail-link";
import SpotifyLink from "./spotify-link";
import AppleMusic from "./apple-music-link";

export const SocialLinks = () => {
  return (
    <div
      className={`flex gap-4 z-[1] ${
        document.URL.includes("links") ? "hidden" : ""
      }`}
    >
      <SpotifyLink />
      <AppleMusic />
      <InstagramLogo />
      <GmailLogo />
    </div>
  );
};

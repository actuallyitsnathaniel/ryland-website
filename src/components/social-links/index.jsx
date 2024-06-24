import InstagramLogo from "./instagram-link";
import GmailLogo from "./gmail-link";
import SpotifyLink from "./spotify-link";
import AppleMusic from "./apple-music-link";

export const SocialLinks = () => {
  return (
    <div
      className={`py-2 flex fixed right-4 gap-3 z-[1] ${
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

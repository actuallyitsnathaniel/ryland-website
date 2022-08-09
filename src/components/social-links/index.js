import InstagramLogo from "./instagram-link";
import GmailLogo from "./gmail-link";

export function SocialLinks() {
  return (
    <div className="flex grid-col-2 bottom-0 left-0 md:fixed sm:relative">
      <InstagramLogo />
      <GmailLogo />
    </div>
  );
}

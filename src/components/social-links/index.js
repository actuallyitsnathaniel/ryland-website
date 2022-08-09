import InstagramLogo from "./instagram-link";
import GmailLogo from "./gmail-link";

export function SocialLinks() {
  return (
    <div className="flex lg:fixed md:relative lg:bottom-0 md:bottom-auto lg:left-0 md:left-auto lg:justify-start justify-center md:pt-4">
      <InstagramLogo />
      <GmailLogo />
    </div>
  );
}

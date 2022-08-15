import InstagramLogo from "./instagram-link";
import GmailLogo from "./gmail-link";

export function SocialLinks() {
  return (
    <div className="flex lg:fixed relative md:bottom-0 bottom-auto md:left-0 left-auto lg:justify-start justify-center md:pt-4 sm:h-full md:h-auto">
      <InstagramLogo />
      <GmailLogo />
    </div>
  );
}

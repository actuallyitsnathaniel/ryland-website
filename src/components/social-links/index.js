import InstagramLogo from "./instagram-link";
import GmailLogo from "./gmail-link";

export function SocialLinks() {
  return (
    <div className="transition-translate duration-100 hover:delay-150 flex lg:fixed relative md:bottom-0 bottom-auto md:left-0 left-auto lg:justify-start justify-center md:pt-4 sm:h-full md:h-auto translate-y-2 lg:translate-y-4 lg:hover:translate-y-1">
      <InstagramLogo />
      <GmailLogo />
    </div>
  );
}

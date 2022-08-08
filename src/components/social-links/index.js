import InstagramLogo from "./instagram-link";
import GmailLogo from "./gmail-link";
import "./index.css";

export function SocialLinks() {
  return (
    <div className="social-links">
      <InstagramLogo className="social-links-item" />
      <GmailLogo className="social-links-item" />
    </div>
  );
}

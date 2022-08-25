import { ReactComponent as EmailSVG } from "../../../assets/images/icons/email-logo.svg";

function GmailLogo() {
  return (
    <a
      className="p-3"
      href="mailto:weareryland@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <EmailSVG className="transition ease-in-out duration-100 hover:scale-110 hover:fill-orange-300" />
    </a>
  );
}

export default GmailLogo;

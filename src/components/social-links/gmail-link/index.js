import email_svg from "../../../assets/images/icons/email-logo.svg";

function GmailLogo() {
  return (
    <a
      className="transition ease-in-out duration-300 p-3 hover:fill-orange-300"
      href="mailto:weareryland@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={email_svg} alt="gmail-svg" />
    </a>
  );
}

export default GmailLogo;

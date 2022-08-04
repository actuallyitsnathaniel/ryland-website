import email_svg from "../../../assets/images/icons/email-logo.svg";

function GmailLogo() {
  return (
    <a
      href="mailto:weareryland@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{ padding: 10 }}
    >
      <img src={email_svg} alt="gmail-svg" className="App-link" />
    </a>
  );
}

export default GmailLogo;

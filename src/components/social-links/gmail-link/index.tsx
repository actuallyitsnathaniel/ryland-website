import GmailColor from "../../../assets/images/icons/gmail-color.svg";

const GmailLogo = () => {
  return (
    <a
      className="transition-all duration-100 p-2 md:hover:translate-y-2 group"
      href="mailto:weareryland@gmail.com"
      target="_blank"
      rel="noopener"
    >
      <img
        alt="gmail"
        src={GmailColor}
        className="h-10 saturate-0 hover:saturate-100 contrast-[150%] to-black hover:contrast-100 transition ease-in-out duration-100 hover:scale-110"
      />
    </a>
  );
};

export default GmailLogo;

import GmailColor from "../../../assets/images/icons/gmail-color.svg";
import { iconLinkClass } from "../../../util/util";

const GmailLogo = () => {
  return (
    <a
      className={iconLinkClass}
      href="mailto:weareryland@gmail.com"
      aria-label="Email Ryland"
    >
      <img
        alt=""
        src={GmailColor}
        className="h-10 w-auto saturate-0 contrast-150 transition duration-200 group-hover:saturate-100 group-hover:contrast-100"
      />
    </a>
  );
};

export default GmailLogo;

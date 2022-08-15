import { ReactComponent as InstagramSVG } from "../../../assets/images/icons/instagram-logo.svg";

function InstagramLogo() {
  return (
    <a
      className="p-3"
      href="https://instagram.com/weareryland"
      target="_blank"
      rel="noopener noreferrer"
    >
      <InstagramSVG className="transition ease-in-out duration-100 hover:scale-110 hover:fill-orange-300" />
    </a>
  );
}

export default InstagramLogo;

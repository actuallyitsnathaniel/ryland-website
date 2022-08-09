import instagram_svg from "../../../assets/images/icons/instagram-logo.svg";

function InstagramLogo() {
  return (
    <a
      className="p-3"
      href="https://instagram.com/weareryland"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={instagram_svg} alt="instagram-svg" />
    </a>
  );
}

export default InstagramLogo;

import instagram_svg from "../../../assets/images/icons/instagram-logo.svg";

function InstagramLogo() {
  return (
    <a
      className="transition ease-in-out duration-300 p-3 fill-white hover:fill-orange-300"
      href="https://instagram.com/weareryland"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={instagram_svg} alt="instagram-svg" />
    </a>
  );
}

export default InstagramLogo;

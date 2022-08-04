import instagram_svg from "../../../assets/images/icons/instagram-logo.svg";

function InstagramLogo() {
  return (
    <a
      href="https://instagram.com/weareryland"
      target="_blank"
      rel="noopener noreferrer"
      style={{ padding: 10 }}
    >
      <img src={instagram_svg} alt="instagram-svg" className="App-link" />
    </a>
  );
}

export default InstagramLogo;

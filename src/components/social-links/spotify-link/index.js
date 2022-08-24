import spotify from "../../../assets/images/icons/music-platforms/spotify.svg";

function SpotifyLink() {
  return (
    <a
      className="p-3"
      href="https://open.spotify.com/artist/3Ekf9P1XRqjP3MBwl6iFVT?si=FFIpHWiOSdiy5jAlhFPCWg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={spotify}
        className="transition-all duration-75 h-[52px] hover:scale-110"
        alt="spotify-alt"
      />
    </a>
  );
}

export default SpotifyLink;

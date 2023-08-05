import React from "react";

import { ReactComponent as SpotifySVG } from "../../../assets/images/icons/music-platforms/spotify.svg";

const SpotifyLink = () => {
  return (
    <a
      className="transition-all duration-100 p-3 md:hover:-translate-y-2"
      href="https://open.spotify.com/artist/3Ekf9P1XRqjP3MBwl6iFVT?si=FFIpHWiOSdiy5jAlhFPCWg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SpotifySVG
        loading="lazy"
        className="transition-all duration-75 h-16 rounded-full hover:scale-110 hover:fill-[#1DB954]"
        alt="spotify-alt"
      />
    </a>
  );
};

export default SpotifyLink;

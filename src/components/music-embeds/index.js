import React from "react";

import "./index.css";
import SpotifyEmbed from "./spotify";
import AppleMusicEmbed from "./apple-music";
import TidalEmbed from "./tidal";

export function MusicLinks() {
  return (
    <div>
      <h2>Listen to Portrait</h2>
      <div className="music-embeds">
        <SpotifyEmbed />
        <AppleMusicEmbed />
        <TidalEmbed />
      </div>
    </div>
  );
}

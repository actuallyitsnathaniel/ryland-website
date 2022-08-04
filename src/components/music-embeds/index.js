import React from "react";

import "./index.css";
import SpotifyEmbed from "./spotify/spotify-embed";
import AppleMusicEmbed from "./apple-music/apple-music-embed";
import TidalEmbed from "./tidal/tidal-embed";

export function MusicLinks() {
  return (
    <div>
      <h2>Listen to Portrait</h2>
      <div style={{ flexFlow: "wrap", display: "flex", gap: "25px" }}>
        <SpotifyEmbed />
        <AppleMusicEmbed />
        <TidalEmbed />
      </div>
    </div>
  );
}

import React from "react";

import "./index.css";
import SpotifyEmbed from "./spotify";
import AppleMusicEmbed from "./apple-music";
import TidalEmbed from "./tidal";

export function MusicLinks() {
  return (
    <main className="music-embeds">
      <h2>Listen to Portrait</h2>
      <SpotifyEmbed />
      <AppleMusicEmbed />
      <TidalEmbed />
    </main>
  );
}

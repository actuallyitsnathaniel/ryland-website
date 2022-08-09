import React from "react";

import SpotifyEmbed from "./spotify";
import AppleMusicEmbed from "./apple-music";
import TidalEmbed from "./tidal";

export function MusicLinks() {
  return (
    <div className="text-white text-4xl">
      <h2>Listen to Portrait</h2>
      <div className="flex flex-wrap justify-center md:h-[470px] sm:h-full">
        <SpotifyEmbed />
        <AppleMusicEmbed />
        <TidalEmbed />
      </div>
    </div>
  );
}

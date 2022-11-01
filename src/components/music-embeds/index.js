import React from "react";

import SpotifyEmbed from "./spotify";
import AppleMusicEmbed from "./apple-music";
import TidalEmbed from "./tidal";

export function MusicLinks() {
  return (
    <div className="text-white text-4xl md:text-5xl font-semibold pl-2.6 pr-2.6 h-max">
      <div className="grid p-6 justify-center whitespace-nowrap">
        Listen to You Should Know
      </div>
      <div className="flex flex-wrap justify-center">
        <SpotifyEmbed />
        <AppleMusicEmbed />
        <TidalEmbed />
      </div>
    </div>
  );
}

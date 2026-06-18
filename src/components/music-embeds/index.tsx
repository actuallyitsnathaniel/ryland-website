import SpotifyEmbed from "./spotify";
import AppleMusicEmbed from "./apple-music";
import TidalEmbed from "./tidal";

export const MusicLinks = () => {
  return (
    <div className="text-white">
      <div className="p-6 text-center whitespace-nowrap font-sans-grotesk text-[clamp(1.75rem,5vw,3rem)] tracking-[-0.02em]">
        Listen to I'm Gonna Be Fine
      </div>
      <div className="flex flex-wrap justify-center">
        <SpotifyEmbed />
        <AppleMusicEmbed />
        <TidalEmbed />
      </div>
    </div>
  );
};

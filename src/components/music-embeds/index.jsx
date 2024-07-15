import SpotifyEmbed from "./spotify";
import AppleMusicEmbed from "./apple-music";
import TidalEmbed from "./tidal";

export const MusicLinks = () => {
  return (
    <div className="text-white text-[150%] md:text-5xl ">
      <div className="p-6 text-center whitespace-nowrap">
        Listen to You Should Know
      </div>
      <div className="flex flex-wrap justify-center">
        <SpotifyEmbed />
        <AppleMusicEmbed />
        <TidalEmbed />
      </div>
    </div>
  );
};

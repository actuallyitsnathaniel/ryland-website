import SpotifyEmbed from "./spotify";
import AppleMusicEmbed from "./apple-music";
import TidalEmbed from "./tidal";
import { pageInset, sectionTitle } from "../../util/util";

export const MusicLinks = () => {
  return (
    <section
      aria-labelledby="listen-heading"
      className={`flex w-full flex-col items-center gap-6 text-xl leading-normal text-white ${pageInset}`}
    >
      <h2 id="listen-heading" className={`${sectionTitle} text-center`}>
        Listen to I'm Gonna Be Fine
      </h2>
      <div className="flex w-full flex-wrap justify-center gap-4">
        <SpotifyEmbed />
        <AppleMusicEmbed />
        <TidalEmbed />
      </div>
    </section>
  );
};

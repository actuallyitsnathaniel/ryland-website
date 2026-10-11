import Newsletter from "../../components/newsletter";
import SEO from "../../components/seo";
import { pageInset, sectionTitle } from "../../util/util";

import gonnaBeFine from "../../assets/images/discography/Singles_EPs/gonna-be-fine-600.jpg";
import Discography from "../../components/discography";

const GonnaBeFine = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: "I'm Gonna Be Fine - EP",
    byArtist: {
      "@type": "MusicGroup",
      name: "Ryland",
    },
    datePublished: "2024",
    genre: "Indie Rock",
    url: "https://www.weareryland.com/imgonnabefine",
  };

  return (
    <div
      className={`grid w-full grid-cols-1 items-start gap-10 text-center text-xl leading-normal text-white lg:grid-cols-3 lg:gap-x-12 ${pageInset}`}
    >
      <SEO
        title="I'm Gonna Be Fine EP - Stream Now | Ryland"
        description="Stream Ryland's latest indie rock EP 'I'm Gonna Be Fine' out now on Spotify, Apple Music, YouTube, and Tidal. Four new tracks from the Los Angeles band featuring 'Stuck At Home' and more."
        url="https://www.weareryland.com/imgonnabefine"
        type="music.album"
        image="https://www.weareryland.com/static/gonna-be-fine-600.jpg"
        jsonLd={jsonLd}
      />
      <h1 className="sr-only">I'm Gonna Be Fine EP - Ryland</h1>
      <section
        aria-labelledby="listen-heading"
        className="flex min-w-0 flex-col items-center gap-6 lg:col-span-1 lg:border-r lg:border-white/15 lg:pr-12"
      >
        <h2 id="listen-heading" className={sectionTitle}>
          Listen
        </h2>
        <Discography.Disc
          priority
          artwork={gonnaBeFine}
          title="I'm Gonna Be Fine - EP"
          appleMusicLink="https://music.apple.com/us/album/im-gonna-be-fine-ep/1776148719"
          youtubeLink="https://youtube.com/playlist?list=OLAK5uy_lSjvjAEPkMEwrKBp3QPZcf_2BkJ1RPbLI&feature=shared"
          spotifyLink="https://open.spotify.com/album/5Wsxv4b0DcdJwxWQhJoslz?si=7BnvCn2WS9SXSpEC_12_Lw"
          tidalLink="https://tidal.com/browse/album/395421548"
        />
        <p className="text-white/60">Out now</p>
      </section>
      <div className="h-px w-full bg-white/15 lg:hidden" aria-hidden="true" />
      <section className="flex min-w-0 justify-center lg:col-span-2">
        <Newsletter />
      </section>
    </div>
  );
};

export default GonnaBeFine;

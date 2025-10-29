import pageTransition from "../../util/transitionPage";
import Newsletter from "../../components/newsletter";
import SEO from "../../components/seo";

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
  const PreSave = () => {
    return (
      <div className="flex flex-col justify-center items-center outline py-5 h-min rounded-lg bg-gray-500 bg-opacity-40 hover:bg-opacity-60 transition duration-300">
        <Discography.Disc
          artwork={gonnaBeFine}
          appleMusicLink="https://music.apple.com/us/album/im-gonna-be-fine-ep/1776148719"
          youtubeLink="https://youtube.com/playlist?list=OLAK5uy_lSjvjAEPkMEwrKBp3QPZcf_2BkJ1RPbLI&feature=shared"
          spotifyLink="https://open.spotify.com/album/5Wsxv4b0DcdJwxWQhJoslz?si=7BnvCn2WS9SXSpEC_12_Lw"
          tidalLink="https://tidal.com/browse/album/395421548"
        />
        <span className="text-xl">
          I'm Gonna Be Fine - EP
          <br />
          <p> Out Now</p>
        </span>
      </div>
    );
  };

  return (
    <div className="flex mt-16 w-screen flex-col justify-center text-center mx-auto p-5 gap-10 text-white items-center text-3xl">
      <SEO
        title="I'm Gonna Be Fine EP"
        description="Stream Ryland's latest EP 'I'm Gonna Be Fine' now on Spotify, Apple Music, YouTube, and Tidal. Out now."
        url="https://www.weareryland.com/imgonnabefine"
        type="music.album"
        image="https://www.weareryland.com/static/gonna-be-fine-600.jpg"
        jsonLd={jsonLd}
      />
      <h1 className="sr-only">I'm Gonna Be Fine EP - Ryland</h1>
      <PreSave />
      <Newsletter />
    </div>
  );
};

export default pageTransition(GonnaBeFine);

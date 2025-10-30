import RylandBedIcon from "../../assets/images/icons/ryland-bed";
import { MusicLinks } from "../../components/music-embeds";
import SEO from "../../components/seo";

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Ryland",
    genre: "Indie Rock",
    url: "https://www.weareryland.com",
    image: "https://www.weareryland.com/video-thumbnail.jpg",
    sameAs: [
      "https://www.instagram.com/weare.ryland",
      "https://open.spotify.com/artist/5MmVJjCarP72v32WkjCixh",
      "https://music.apple.com/us/artist/ryland/1473082051",
      "https://www.youtube.com/@rylandband",
    ],
  };

  return (
    <div id="home" className={`w-screen flex-col justify-stretch`}>
      <SEO
        title="Ryland | Official Website"
        description="Official website of Ryland, an indie rock band from Los Angeles. Stream our latest EP 'I'm Gonna Be Fine' on Spotify, Apple Music, YouTube, and all platforms. New music, tour dates, and more."
        url="https://www.weareryland.com"
        jsonLd={jsonLd}
      />
      <div className="flex flex-grow">
        <div className="mt-16" />
      </div>
      <h1 className="sr-only">Ryland - Indie Rock Band from Los Angeles</h1>
      <RylandBedIcon />
      <div className="flex-col text-center text-white" hidden>
        <h2 className="p-3 text-[150%] md:text-5xl  whitespace-nowrap">
          Upcoming Shows
        </h2>
      </div>
      <MusicLinks />
    </div>
  );
};

export default Home;

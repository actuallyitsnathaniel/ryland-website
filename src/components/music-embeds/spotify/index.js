import "./index.css";

export default function SpotifyEmbed() {
  return (
    <iframe
      className="spotify-embed"
      title="spotify-embedded"
      style={{
        borderRadius: "18px",

        padding: "1vh",
      }}
      src={
        "https://open.spotify.com/embed/album/1YRrSespqvZu2iYa7WSM4X?utm_source=generator"
      }
      frameBorder={0}
      allow={
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      }
    />
  );
}

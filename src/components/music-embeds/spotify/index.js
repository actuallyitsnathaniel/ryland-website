export default function SpotifyEmbed() {
  return (
    <iframe
      title="spotify-embedded"
      style={{
        borderRadius: "18px",
        minHeight: "450px",
        maxHeight: "450px",
        minWidth: "37vh",
        maxWidth: "37vh",
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

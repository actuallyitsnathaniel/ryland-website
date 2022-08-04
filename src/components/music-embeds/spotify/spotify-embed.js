export default function SpotifyEmbed() {
  return (
    <iframe
      title="spotify-embedded"
      loading="lazy"
      src={
        "https://open.spotify.com/embed/album/1YRrSespqvZu2iYa7WSM4X?utm_source=generator"
      }
      style={{
        borderRadius: 10,
        minHeight: 400,
        maxHeight: 450,
        maxWidth: "33vh",
        flex: 1,
      }}
      frameBorder={0}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
}

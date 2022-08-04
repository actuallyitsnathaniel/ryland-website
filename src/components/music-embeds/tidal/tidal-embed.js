export default function TidalEmbed() {
  return (
    <iframe
      title="tidal-embed"
      loading="lazy"
      src={"https://embed.tidal.com/albums/175851104?layout=gridify"}
      frameborder="0"
      style={{
        borderRadius: 10,
        minHeight: 400,
        maxWidth: "33vh",
        maxHeight: 450,
        flex: 1,
      }}
    />
  );
}

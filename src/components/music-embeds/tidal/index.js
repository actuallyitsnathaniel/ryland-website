export default function TidalEmbed() {
  return (
    <iframe
      title="tidal-embed"
      style={{
        borderRadius: "18px",
        minHeight: "450px",
        maxHeight: "450px",
        padding: "1vh",
      }}
      src={"https://embed.tidal.com/albums/175851104?layout=gridify"}
      frameborder={"0"}
    />
  );
}

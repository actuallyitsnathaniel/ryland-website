export default function TidalEmbed() {
  return (
    <iframe
      title="tidal-embed"
      style={{
        borderRadius: "18px",
        minHeight: "450px",
        maxHeight: "450px",
        minWidth: "30vh",
        maxWidth: "30vh",
        padding: "1vh",
      }}
      src={"https://embed.tidal.com/albums/175851104?layout=gridify"}
      frameborder={"0"}
    />
  );
}

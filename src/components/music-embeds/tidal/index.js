export default function TidalEmbed() {
  return (
    <iframe
      className="h-[470px]"
      title="tidal-embed"
      style={{
        borderRadius: "18px",
        padding: "1vh",
      }}
      src={"https://embed.tidal.com/albums/175851104?layout=gridify"}
      frameborder={"0"}
    />
  );
}

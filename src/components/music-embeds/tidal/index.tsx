const TidalEmbed = () => {
  return (
    <iframe
      className="h-[470px]"
      title="tidal-embed"
      style={{
        borderRadius: "18px",
        padding: "1vh",
      }}
      src={"https://embed.tidal.com/albums/254309190?layout=gridify"}
      frameBorder={0}
    />
  );
};

export default TidalEmbed;

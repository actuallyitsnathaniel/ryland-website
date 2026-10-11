const TidalEmbed = () => {
  return (
    <iframe
      className="h-[470px] w-80 max-w-full rounded-xl"
      title="tidal-embed"
      src={"https://embed.tidal.com/albums/395421548?layout=gridify"}
      frameBorder={0}
    />
  );
};

export default TidalEmbed;

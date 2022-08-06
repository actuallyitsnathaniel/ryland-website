export default function AppleMusicEmbed() {
  return (
    <iframe
      title="apple-music-embedded"
      style={{
        borderRadius: "18px",
        minHeight: "450px",
        maxHeight: "450px",
        minWidth: "30vh",
        maxWidth: "30vh",
        padding: "1vh",
      }}
      src={"https://embed.music.apple.com/us/album/portrait/1556566677"}
      frameborder={0}
      sandbox={
        "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      }
      allow={"autoplay *; encrypted-media *; fullscreen *; clipboard-write"}
    />
  );
}

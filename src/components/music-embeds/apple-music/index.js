export default function AppleMusicEmbed() {
  return (
    <iframe
      title="apple-music-embedded"
      className="h-[470px]"
      style={{
        borderRadius: "18px",
        padding: "1vh",
      }}
      src={"https://embed.music.apple.com/us/album/portrait/1556566677"}
      frameBorder={0}
      sandbox={
        "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      }
      allow={"autoplay *; encrypted-media *; fullscreen *; clipboard-write"}
    />
  );
}

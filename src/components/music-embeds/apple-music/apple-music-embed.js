export default function AppleMusicEmbed() {
  return (
    <iframe
      title="apple-music-embedded"
      loading="lazy"
      src={"https://embed.music.apple.com/us/album/portrait/1556566677"}
      style={{
        borderRadius: 10,
        minHeight: 450,
        minWidth: "30vh",
        flex: 1,
      }}
      frameborder={0}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
    />
  );
}

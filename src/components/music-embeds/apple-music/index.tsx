const AppleMusicEmbed = () => {
  return (
    <iframe
      title="apple-music-embedded"
      className="h-[470px]"
      style={{
        borderRadius: "18px",
        padding: "1vh",
      }}
      src={
        "https://embed.music.apple.com/us/album/im-gonna-be-fine-ep/1776148719"
      }
      sandbox={
        "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      }
      allow={"autoplay *; encrypted-media *; fullscreen *; clipboard-write"}
    />
  );
};

export default AppleMusicEmbed;

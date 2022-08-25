import React from "react";

const MusicPlatformLink = (props) => {
  return (
    <a
      className={`hidden`}
      href={props.musicLink}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        className="transition-all duration-75 h-[75px] hover:scale-110"
        alt="music-link"
        src={props.svg}
      />
    </a>
  );
};

export default MusicPlatformLink();

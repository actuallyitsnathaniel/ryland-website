import React from "react";

import RylandBedIcon from "../assets/images/icons/ryland-bed";
import { MusicLinks } from "../components/music-embeds";

function Home() {
  return (
    <div className="grid place-content-center text-center">
      <RylandBedIcon />
      <MusicLinks />
    </div>
  );
}

export default Home;

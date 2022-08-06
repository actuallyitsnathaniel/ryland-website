import React from "react";

import RylandBedIcon from "../assets/images/icons/ryland-bed";
import { MusicLinks } from "../components/music-embeds";

function Home() {
  return (
    <>
      <RylandBedIcon />

      <div className="App-body">
        <MusicLinks />
      </div>
    </>
  );
}

export default Home;

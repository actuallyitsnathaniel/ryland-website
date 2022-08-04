import React from "react";

import RylandBedIcon from "../assets/images/icons/ryland-bed/ryland-bed";
import { MusicLinks } from "../components/music-embeds";

function Home() {
  return (
    <>
      <main>
        <header className="ryland-logo">
          <RylandBedIcon />
        </header>
        <div className="App-body">
          <MusicLinks />
        </div>
      </main>
    </>
  );
}

export default Home;

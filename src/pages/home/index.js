import React from "react";

import RylandBedIcon from "../../assets/images/icons/ryland-bed";
import { MusicLinks } from ".//../../components/music-embeds";
import Jan19 from "../../components/show-link/jan19";

function Home() {
  return (
    <div>
      <div>
        <RylandBedIcon />
      </div>
      <div className="flex-col text-center text-white">
        <Jan19 />
      </div>

      <div>
        <MusicLinks />
      </div>
    </div>
  );
}

export default Home;

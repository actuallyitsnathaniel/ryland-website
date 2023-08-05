import React from "react";

import RylandBedIcon from "../../assets/images/icons/ryland-bed";
import { MusicLinks } from "../../components/music-embeds";

function Home() {
  return (
    <div>
      <div>
        <RylandBedIcon />
      </div>
      <div className="flex-col text-center text-white" hidden>
        <h1 className="p-3 text-[150%] md:text-5xl font-semibold whitespace-nowrap">
          Upcoming Shows
        </h1>
      </div>

      <div>
        <MusicLinks />
      </div>
    </div>
  );
}

export default Home;

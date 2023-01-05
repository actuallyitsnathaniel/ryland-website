import React from "react";

import RylandBedIcon from "../../assets/images/icons/ryland-bed";
import { MusicLinks } from ".//../../components/music-embeds";
import ShowLink from "../../components/show-link";

import show14th from "../../assets/images/thumbnails/brodyn_jla_ryland.png";

function Home() {
  return (
    <div>
      <div>
        <RylandBedIcon />
      </div>
      <div className="flex justify-center text-white">
        <ShowLink
          thumbnail={show14th}
          link={
            "https://dice.fm/event/7eyvb-brodyn-john-lowell-anderson-ryland-19th-jan-the-silverlake-lounge-los-angeles-tickets?_branch_match_id=1120861200082607989&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1c81T0kzNzU3NzFJNgEATz3tRyEAAAA%3D"
          }
          venue={"Silverlake Lounge"}
          date={"January 19th"}
          artists={"Brodyn | John Lowell Anderson | Ryland"}
          alt={"show-19th"}
        />
      </div>

      <div>
        <MusicLinks />
      </div>
    </div>
  );
}

export default Home;

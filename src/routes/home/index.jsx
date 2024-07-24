import { Transition } from "@headlessui/react";

import RylandBedIcon from "../../assets/images/icons/ryland-bed";
import { MusicLinks } from "../../components/music-embeds";

const Home = ({ location }) => {
  let isHome = location === "home" || location === "";
  return (
    <div id="home" className={`flex-col justify-stretch`}>
      <Transition show={isHome}>
        <div className="flex flex-grow">{/* <div className="mt-16" /> */}</div>
        {/* <RylandBedIcon />
      <div className="flex-col text-center text-white" hidden>
        <h1 className="p-3 text-[150%] md:text-5xl  whitespace-nowrap">
          Upcoming Shows
        </h1>
      </div>
      <MusicLinks /> */}
      </Transition>
    </div>
  );
};

export default Home;

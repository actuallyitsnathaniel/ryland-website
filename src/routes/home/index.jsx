import RylandBedIcon from "../../assets/images/icons/ryland-bed";
import { MusicLinks } from "../../components/music-embeds";
import pageTransition from "../../util/transitionPage";

const Home = () => {
  return (
    <div id="home" className={`w-screen flex-col justify-stretch`}>
      <div className="flex flex-grow">
        <div className="mt-16" />
      </div>
      {/* <RylandBedIcon />
      <div className="flex-col text-center text-white" hidden>
        <h1 className="p-3 text-[150%] md:text-5xl  whitespace-nowrap">
          Upcoming Shows
        </h1>
      </div>
      <MusicLinks /> */}
    </div>
  );
};

export default pageTransition(Home);

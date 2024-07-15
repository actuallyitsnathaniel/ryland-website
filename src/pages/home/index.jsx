import RylandBedIcon from "../../assets/images/icons/ryland-bed";
import { MusicLinks } from "../../components/music-embeds";

const Home = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <RylandBedIcon />
      <div className="flex-col text-center text-white" hidden>
        <h1 className="p-3 text-[150%] md:text-5xl  whitespace-nowrap">
          Upcoming Shows
        </h1>
      </div>
      <MusicLinks />
    </div>
  );
};

export default Home;

import RylandBedIcon from "../../assets/images/icons/ryland-bed";
import { MusicLinks } from "../../components/music-embeds";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation().hash;
  return (
    <div
      id="home"
      className={`${
        location.includes("home" || "/") ? "flex" : "hidden"
      } flex-col h-full w-screen justify-stretch snap-center`}
    >
      <div className="flex flex-grow"></div>
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

export default Home;

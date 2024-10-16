import Newsletter from "../../components/newsletter";

import stuckAtHome from "../../assets/images/discography/Singles_EPs/stuck-at-home_600x600bb.jpg";

const GonnaBeFine = () => {
  return (
    <div className="flex mt-16 w-screen flex-col justify-between text-center mx-auto my-auto p-5 gap-10 text-white items-center text-3xl">
      <a
        href="https://distrokid.com/hyperfollow/ryland/stuck-at-home"
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-col justify-center outline w-72 h-min p-4 rounded-lg bg-gray-500 bg-opacity-40"
      >
        <img
          src={stuckAtHome}
          alt="stuck-at-home-single"
          className="object-scale-down p-2"
        />
        <button className="text-xl">pre-save "stuck at home"</button>
      </a>
      <Newsletter />
    </div>
  );
};
export default GonnaBeFine;

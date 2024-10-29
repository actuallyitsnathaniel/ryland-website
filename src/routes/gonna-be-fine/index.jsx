import pageTransition from "../../util/transitionPage";
import Newsletter from "../../components/newsletter";

import stuckAtHome from "../../assets/images/discography/Singles_EPs/stuck-at-home_600x600bb.jpg";
import fellThrough from "../../assets/images/discography/Singles_EPs/fell-through-600x600bb.jpg";
import loveYouAgain from "../../assets/images/discography/Singles_EPs/love-you-again-600x600bb.jpg";
import iWantEveryoneToKnowYou from "../../assets/images/discography/Singles_EPs/i-want-everyone-to-know-you-600x600bb.jpg";
import gonnaBeFine from "../../assets/images/discography/Singles_EPs/gonna-be-fine-600.jpg";

const GonnaBeFine = () => {
  const PreSave = () => {
    const today = new Date();
    const releases = [
      {
        title: "stuck-at-home",
        artwork: stuckAtHome,
        releaseDate: new Date("2024-10-23"),
      },
      {
        title: "fell-through",
        artwork: fellThrough,
        releaseDate: new Date("2024-10-29"),
      },
      {
        title: "love-you-again",
        artwork: loveYouAgain,
        releaseDate: new Date("2024-11-05"),
      },
      {
        title: "i-want-everyone-to-know-you",
        artwork: iWantEveryoneToKnowYou,
        releaseDate: new Date("2024-11-11"),
      },
      {
        title: "gonna-be-fine",
        artwork: gonnaBeFine,
        releaseDate: new Date("2024-11-17"),
      },
    ];

    // Find the next release based on today's date
    const release = releases.find((release) => release.releaseDate > today);

    return release ? (
      <div className="pt-2">
        <a
          href={`https://distrokid.com/hyperfollow/ryland/${release.title}`}
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-col justify-center items-center outline w-72 h-min p-4 rounded-lg bg-gray-500 bg-opacity-40 hover:bg-opacity-60 transition duration-300"
        >
          <img
            src={release.artwork}
            alt={`${release.title} artwork`}
            className="object-scale-down p-2 w-full rounded-md"
          />
          <button className="text-xl mt-4">
            "
            {release.title
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
            "
            <br />
            Pre-save
          </button>
        </a>
      </div>
    ) : (
      <div className="pt-2">
        <a
          href={`https://distrokid.com/hyperfollow/ryland/${release.title}`}
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-col justify-center items-center outline w-72 h-min p-4 rounded-lg bg-gray-500 bg-opacity-40 hover:bg-opacity-60 transition duration-300"
        >
          <img
            src={release.artwork}
            alt={`${release.title} artwork`}
            className="object-scale-down p-2 w-full rounded-md"
          />
          <button className="text-xl mt-4">
            I'm Gonna Be Fine EP - out now
          </button>
        </a>
      </div>
    );
  };

  return (
    <div className="flex mt-16 w-screen flex-col justify-center text-center mx-auto p-5 gap-10 text-white items-center text-3xl">
      <PreSave />
      <Newsletter />
    </div>
  );
};

export default pageTransition(GonnaBeFine);

import Newsletter from "../../components/newsletter";

import stuckAtHome from "../../assets/images/discography/Singles_EPs/stuck-at-home_600x600bb.jpg";
import fellThrough from "../../assets/images/discography/Singles_EPs/fell-through-600x600bb.jpg";
import loveYouAgain from "../../assets/images/discography/Singles_EPs/love-you-again-600x600bb.jpg";
import iWantEveryoneToKnowYou from "../../assets/images/discography/Singles_EPs/i-want-everyone-to-know-you-600x600bb.jpg";
import React from "react";

const PreSave = () => {
  const today = new Date();
  const releases = [
    {
      title: "stuck-at-home",
      artwork: stuckAtHome,
      releaseDate: new Date("10-23-2024"),
    },
    {
      title: "fell-through",
      artwork: fellThrough,
      releaseDate: new Date("10-29-2024"),
    },
    {
      title: "love-you-again",
      artwork: loveYouAgain,
      releaseDate: new Date("11-05-2024"),
    },
    {
      title: "i-want-everyone-to-know-you",
      artwork: iWantEveryoneToKnowYou,
      releaseDate: new Date("11-11-2024"),
    },
  ];
  const release = releases.find((release) => release.releaseDate > today);

  return (
    <div className="pt-2">
      <a
        href={`https://distrokid.com/hyperfollow/ryland/${release.title}`}
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-col justify-center outline w-72 h-min p-4 rounded-lg bg-gray-500 bg-opacity-40"
      >
        <img
          src={release.artwork}
          alt={`${release.title}-artwork`}
          className="object-scale-down p-2"
        />
        <button className="text-xl">
          pre-save "{release.title.replace(/-/g, " ")}"
        </button>
      </a>
    </div>
  );
};

const GonnaBeFine = () => {
  return (
    <div className="flex mt-16 w-screen flex-col justify-between text-center mx-auto my-auto p-5 gap-10 text-white items-center text-3xl">
      <PreSave />
      <Newsletter />
    </div>
  );
};
export default GonnaBeFine;

import React, { useState } from "react";
import tom from "../../assets/images/the-band/tom.png";
import ron from "../../assets/images/the-band/ron.png";
import elias from "../../assets/images/the-band/elias.png";
import jake from "../../assets/images/the-band/jake.png";
import nate from "../../assets/images/the-band/nate.png";

function AboutUs() {
  const [expanded, setExpanded] = useState(-1);

  const setActiveMember = (i) => {
    if (i === expanded) {
      setExpanded(-1);
    } else {
      setExpanded(i);
    }
  };

  // Tailwind declarations for band members set up an an array

  // 0 = wrapper
  // 1 = profile-pic
  // 2 = description text

  const focused = [
    "fixed z-[1] top-0 grid col-span-1 transition-transform origin-center bg-origin-top duration-150 place-items-center bg-black bg-opacity-70 backdrop-blur-lg w-screen h-screen",
    "h-[400px]",
    "transition-all duration-75 ease-in-out scale-100 text-sm md:text-lg text-start mx-10",
  ];

  const unfocused = [
    "transition-all ease-in-out duration-150 hover:scale-110 flex xl:basis-1/3 items-center p-3",
    "about-us-profile-pic",
    "scale-0 hidden",
  ];

  return (
    <div className="flex items-center justify-center min-h-full text-4xl text-white p-3 mt-9">
      <div className="flex flex-wrap max-w-1/2 justify-center">
        <div
          onClick={() => {
            setActiveMember(0);
          }}
          className={`${expanded === 0 ? focused[0] : unfocused[0]}`}
        >
          <img
            src={tom}
            alt="tom"
            className={`${expanded === 0 ? focused[1] : unfocused[1]}`}
          />
          <p className="font-bold self-center p-3">{"Tom"}</p>
          <div className={`${expanded === 0 ? focused[2] : unfocused[2]}`}>
            {`The frontman of the band. "It's all about the We." Plays keys,
            guitar, and sings like a songbird.`}
          </div>
        </div>

        <div
          onClick={() => {
            setActiveMember(1);
          }}
          className={`${expanded === 1 ? focused[0] : unfocused[0]}`}
        >
          <img
            src={ron}
            alt="ron"
            className={`${expanded === 1 ? focused[1] : unfocused[1]}`}
          />
          <p className="font-bold self-center p-3">{"Ron"}</p>
          <div className={`${expanded === 1 ? focused[2] : unfocused[2]}`}>
            {"The bassist of the band. He'll riff if he feels like."}
          </div>
        </div>

        <div
          onClick={() => {
            setActiveMember(2);
          }}
          className={`${expanded === 2 ? focused[0] : unfocused[0]}`}
        >
          <img
            src={nate}
            alt="nate"
            className={`${expanded === 2 ? focused[1] : unfocused[1]}`}
          />
          <p className="font-bold self-center p-3">{"Nate"}</p>
          <div className={`${expanded === 2 ? focused[2] : unfocused[2]}`}>
            {"Synths and samples guy. Sings with Tom."}
          </div>
        </div>

        <div
          onClick={() => {
            setActiveMember(3);
          }}
          className={`${expanded === 3 ? focused[0] : unfocused[0]}`}
        >
          <img
            src={elias}
            alt="elias"
            className={`${expanded === 3 ? focused[1] : unfocused[1]}`}
          />
          <p className="font-bold self-center p-3">{"Elias"}</p>
          <div className={`${expanded === 3 ? focused[2] : unfocused[2]}`}>
            {"The drummer. He'll sing if he feels like it."}
          </div>
        </div>

        <div
          onClick={() => {
            setActiveMember(4);
          }}
          className={`${expanded === 4 ? focused[0] : unfocused[0]}`}
        >
          <img
            src={jake}
            alt="jake"
            className={`${expanded === 4 ? focused[1] : unfocused[1]}`}
          />
          <p className="font-bold self-center p-3">{"Jake"}</p>
          <div className={`${expanded === 4 ? focused[2] : unfocused[2]}`}>
            {
              "Producer and electric guitar player. He'll solo if he feels like it."
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

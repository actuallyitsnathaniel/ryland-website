import React, { useState } from "react";
import tom from "../../assets/images/the-band/tom.png";
import ron from "../../assets/images/the-band/ron.png";
import elias from "../../assets/images/the-band/elias.png";
import jake from "../../assets/images/the-band/jake.png";
import nate from "../../assets/images/the-band/nate.png";

// why does useState render a blank white screen

function AboutUs() {
  const [expanded, setExpanded] = useState(-1);
  // let expanded = -1;

  const setActiveMember = (i) => {
    if (i === expanded) {
      setExpanded(-1);
    } else {
      setExpanded(i);
    }
  };

  const bandMemberDiv =
    "transition-all ease-in-out duration-150 hover:scale-110 flex xl:basis-1/3 items-center p-3";

  return (
    <div className="flex items-center justify-center min-h-full text-4xl text-white">
      <div className="flex flex-wrap max-w-1/2 justify-center">
        <div
          onClick={() => {
            setActiveMember(0);
          }}
          className={`${bandMemberDiv} ${
            expanded === 0
              ? // ? "fixed z-[1] transition-all origin-center bg-origin-content duration-150 flex-wrap flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 backdrop-blur-md w-screen h-screen items-center justify-center"
                "fixed z-[1] transition-all origin-center bg-origin-content duration-150 flex-wrap flex-col transform bg-black bg-opacity-70 backdrop-blur-md w-screen h-screen items-center justify-center"
              : ""
          }`}
        >
          <img
            src={tom}
            alt="tom"
            className={
              expanded === 0 ? `flex h-[400px]` : "about-us-profile-pic"
            }
          />
          <p className="flex font-bold text-center p-3">Tom</p>
          <div
            className={`${
              expanded === 0
                ? "transition-transform duration-75 ease-in-out scale-100 text-sm text-start mx-10"
                : "scale-0 hidden"
            }`}
          >
            The frontman of the band. It's all about the We. Plays keys, guitar,
            and sings like a songbird.
          </div>
        </div>

        <div
          onClick={() => {
            setActiveMember(1);
          }}
          className={`${bandMemberDiv}`}
        >
          <div className="flex items-center whitespace-nowrap p-3">
            <img src={ron} alt="ron" className="about-us-profile-pic" />
            <p className="font-bold">Ron</p>
          </div>
        </div>

        <div
          onClick={() => {
            setActiveMember(2);
          }}
          className={`${bandMemberDiv}`}
        >
          <div className="flex items-center whitespace-nowrap p-3">
            <img src={nate} alt="nate" className="about-us-profile-pic" />
            <p className="font-bold">Nate</p>
          </div>
        </div>

        <div
          onClick={() => {
            setActiveMember(3);
          }}
          className={`${bandMemberDiv}`}
        >
          <div className="flex items-center whitespace-nowrap p-3">
            <img src={elias} alt="elias" className="about-us-profile-pic" />
            <p className="font-bold">Elias</p>
          </div>
        </div>

        <div
          onClick={() => {
            setActiveMember(4);
          }}
          className={`${bandMemberDiv}`}
        >
          <div className="flex items-center whitespace-nowrap p-3">
            <img src={jake} alt="jake" className="about-us-profile-pic" />
            <p className="font-bold">Jake</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

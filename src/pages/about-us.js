import React, { useState, useEffect } from "react";

import tom from "../assets/images/the-band/tom.png";
import ron from "../assets/images/the-band/ron.png";
import elias from "../assets/images/the-band/elias.png";
import jake from "../assets/images/the-band/jake.png";
import nate from "../assets/images/the-band/nate.png";

function AboutUs() {
  // using let for now as placeholder
  let expanded = -1;

  // const [expanded, setExpanded] = useState(0);

  const bandMemberBtnStyle =
    "transition-scale ease-in-out duration-150 hover:scale-110 flex flex-wrap items-center p-3 ";

  return (
    <div className="grid place-items-center text-4xl text-white min-h-screen">
      <div className="flex flex-wrap max-w-1/2 justify-center">
        <button
          onClick={() => {
            // setExpanded(0);
          }}
          className={`${bandMemberBtnStyle}`}
        >
          <img src={tom} alt="tom" className="about-us-profile-pic" />
          <p className="font-bold">Tom</p>

          <div className={`text-xs ${expanded === 0 ? "" : "hidden"}`}>
            lorem ipsum dolor desit requescat en pache lorem ipsum dolor desit
            requescat en pache lorem ipsum dolor desit requescat en pache lorem
            ipsum dolor desit requescat en pache lorem ipsum dolor desit
            requescat en pache
          </div>
        </button>

        <button onClick={() => {}} className={`${bandMemberBtnStyle}`}>
          <div className="flex items-center whitespace-nowrap p-3">
            <img src={ron} alt="ron" className="about-us-profile-pic" />
            <p className="font-bold">Ron</p>
          </div>
        </button>

        <button className={`${bandMemberBtnStyle}`}>
          <div className="flex items-center whitespace-nowrap p-3">
            <img src={nate} alt="nate" className="about-us-profile-pic" />
            <p className="font-bold">Nate</p>
          </div>
        </button>

        <button className={`${bandMemberBtnStyle}`}>
          <div className="flex items-center whitespace-nowrap p-3">
            <img src={elias} alt="elias" className="about-us-profile-pic" />
            <p className="font-bold">Elias</p>
          </div>
        </button>

        <button className={`${bandMemberBtnStyle}`}>
          <div className="flex items-center whitespace-nowrap p-3">
            <img src={jake} alt="jake" className="about-us-profile-pic" />
            <p className="font-bold">Jake</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default AboutUs;

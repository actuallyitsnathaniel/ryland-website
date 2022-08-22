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

  // const setActiveMember = (i) => {
  //   setExpanded(i);
  // };

  const bandMemberBtnStyle =
    "transition-scale ease-in-out duration-150 hover:scale-110 flex xl:basis-1/3 items-center p-3";

  return (
    <div className="flex items-center justify-center min-h-full text-4xl text-white">
      <div className="flex flex-wrap max-w-1/2 justify-center">
        <div
          onClick={() => {
            setExpanded(0);
          }}
          className={`${bandMemberBtnStyle}`}
        >
          <div className="flex items-center whitespace-nowrap p-3">
            <img src={tom} alt="tom" className="about-us-profile-pic" />
            <p className="font-bold">Tom</p>
          </div>
          <div className={`text-sm ${expanded === 0 ? "" : "hidden"} `}>
            lorem ipsum dolor desit requescat en pache lorem ipsum dolor desit
            requescat en pache lorem ipsum dolor desit requescat en pache lorem
            ipsum dolor desit requescat en pache lorem ipsum dolor desit
            requescat en pache
          </div>
        </div>

        <div
          onClick={() => {
            setExpanded(1);
          }}
          className={`${bandMemberBtnStyle}`}
        >
          <div className="flex items-center whitespace-nowrap p-3">
            <img src={ron} alt="ron" className="about-us-profile-pic" />
            <p className="font-bold">Ron</p>
          </div>
        </div>

        <div
          onClick={() => {
            setExpanded(2);
          }}
          className={`${bandMemberBtnStyle}`}
        >
          <div className="flex items-center whitespace-nowrap p-3">
            <img src={nate} alt="nate" className="about-us-profile-pic" />
            <p className="font-bold">Nate</p>
          </div>
        </div>

        <div
          onClick={() => {
            setExpanded(3);
          }}
          className={`${bandMemberBtnStyle}`}
        >
          <div className="flex items-center whitespace-nowrap p-3">
            <img src={elias} alt="elias" className="about-us-profile-pic" />
            <p className="font-bold">Elias</p>
          </div>
        </div>

        <div
          onClick={() => {
            setExpanded(4);
          }}
          className={`${bandMemberBtnStyle}`}
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

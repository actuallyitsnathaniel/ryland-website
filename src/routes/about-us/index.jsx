import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BandMember from "./member";

import tom from "../../assets/images/the-band/tom.png";
import ron from "../../assets/images/the-band/ron.png";
import elias from "../../assets/images/the-band/elias.png";
import jake from "../../assets/images/the-band/jake.png";
import nate from "../../assets/images/the-band/nate.png";

import Press from "../press";

const AboutUs = () => {
  // TODO: implement context to adjust video BG to
  // zoom into each band member and list something
  // about them
  let location = useLocation().hash;
  return (
    <div
      id="about-us"
      className={`${
        location.includes("about-us") ? "flex" : "hidden"
      } flex-col text-white w-screen`}
    >
      <div
        className="flex flex-wrap flex-grow flex-col items-center 
        snap-center text-4xl text-white min-h-screen my-auto"
      >
        <div className="flex flex-wrap max-w-1/2 justify-center">
          <BandMember
            profilePic={tom}
            name={"Tom"}
            i={0}
            desc={`The frontman of the band. "It's all about the We." Plays keys,
          guitar, and sings like a songbird.`}
          />

          <BandMember
            profilePic={ron}
            name={"Ron"}
            i={1}
            desc={`The bassist of the band. He'll riff if he feels like it.`}
          />

          <BandMember
            profilePic={nate}
            name={"Nate"}
            i={2}
            desc={`Synths and samples guy. Sings with Tom. He'll do a little jig if he feels like it.`}
          />

          <BandMember
            profilePic={elias}
            name={"Elias"}
            i={3}
            desc={`The drummer. He'll sing if he feels like it.`}
          />

          <BandMember
            profilePic={jake}
            name={"Jake"}
            i={4}
            desc={`Producer and electric guitar player. He'll solo if he feels like it.`}
          />
        </div>
        <Press />
      </div>
    </div>
  );
};

export default AboutUs;

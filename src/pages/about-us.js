import React from "react";

import tom from "../assets/images/the-band/tom.png";
import ron from "../assets/images/the-band/ron.png";
import elias from "../assets/images/the-band/elias.png";
import jake from "../assets/images/the-band/jake.png";
import nate from "../assets/images/the-band/nate.png";

function AboutUs() {
  return (
    <div className="grid place-items-center text-4xl text-white min-h-screen">
      <h1>About Us</h1>
      <div className="flex flex-wrap max-w-1/2 justify-center whitespace-normal">
        <img src={tom} alt="tom" className="max-w-md p-5" />
        <img src={ron} alt="ron" className="max-w-md p-5" />
        <img src={nate} alt="nate" className="max-w-md p-5" />
        <img src={elias} alt="elias" className="max-w-md p-5" />
        <img src={jake} alt="jake" className="max-w-md p-5" />
      </div>
    </div>
  );
}

export default AboutUs;

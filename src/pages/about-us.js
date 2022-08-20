import React from "react";

import tom from "../assets/images/the-band/tom.png";
import ron from "../assets/images/the-band/ron.png";
import elias from "../assets/images/the-band/elias.png";
import jake from "../assets/images/the-band/jake.png";
import nate from "../assets/images/the-band/nate.png";

function AboutUs() {
  return (
    <div className="grid place-items-center text-4xl text-white min-h-screen">
      <div className="flex flex-wrap max-w-1/2 justify-center">
        <div className="flex items-center whitespace-nowrap p-3">
          <img src={tom} alt="tom" className="max-w-xs p-4" />
          <p className="font-bold">Tom</p>
        </div>

        <div className="flex items-center whitespace-nowrap p-3">
          <img src={ron} alt="ron" className="max-w-xs p-4" />
          <p className="font-bold">Ron</p>
        </div>

        <div className="flex items-center whitespace-nowrap p-3">
          <img src={nate} alt="nate" className="max-w-xs p-4" />
          <p className="font-bold">Nate</p>
        </div>

        <div className="flex items-center whitespace-nowrap p-3">
          <img src={elias} alt="elias" className="max-w-xs p-4" />
          <p className="font-bold">Elias</p>
        </div>

        <div className="flex items-center whitespace-nowrap p-3">
          <img src={jake} alt="jake" className="max-w-xs p-4" />
          <p className="font-bold">Jake</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

import React from "react";

import tom from "../assets/images/the-band/tom.png";
import ron from "../assets/images/the-band/ron.png";
import elias from "../assets/images/the-band/elias.png";
import jake from "../assets/images/the-band/jake.png";
import nate from "../assets/images/the-band/nate.png";

function AboutUs() {
  return (
    <div className="grid place-items-center text-4xl text-white min-h-screen">
      <div className="flex flex-wrap max-w-1/2 md:justify-center">
        <div className="">
          <img src={tom} alt="tom" className="max-w-sm p-5" />
          <p>Tom</p>
        </div>

        <div>
          <img src={ron} alt="ron" className="max-w-sm p-5" />
          <p>Ron</p>
        </div>

        <div>
          <img src={nate} alt="nate" className="max-w-sm p-5" />
          <p>Nate</p>
        </div>

        <div>
          <img src={elias} alt="elias" className="max-w-sm p-5" />
          <p>Elias</p>
        </div>

        <div>
          <img src={jake} alt="jake" className="max-w-sm p-5" />
          <p>Jake</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

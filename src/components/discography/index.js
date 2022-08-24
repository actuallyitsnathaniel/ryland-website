import React from "react";

// Albums/EPs
import itinerary from "../../assets/images/discography/Singles_EPs/Itinerary-EP_600x600bb.jpeg";
import lashingOut from "../../assets/images/discography/Singles_EPs/Lashing-Out-EP_600x600bb.jpeg";
import portrait from "../../assets/images/discography/LPs/Portrait-LP_600x600bb.jpeg";
import iblfawn from "../../assets/images/discography/Singles_EPs/I'veBeenLooking-Single_600x600bb.jpeg";
import karma from "../../assets/images/discography/Singles_EPs/Karma-Single_600x600bb.jpeg";
import stairwell from "../../assets/images/discography/Singles_EPs/Stairwell-Single_600x600bb.jpeg";
import talking from "../../assets/images/discography/Singles_EPs/Talking-Single_600x600bb.jpeg";

function Disc(props) {
  return (
    <div className="transition-scale duration-100 text-8xl p-6 hover:scale-110 group">
      <img className="h-[300px]" src={props.artwork} alt={props.title} />
      <div className="flex flex-row w-[300px] flex-wrap text-center justify-center transition-scale duration-100 origin-top text-lg scale-0 group-hover:scale-90">
        {props.title}
      </div>
    </div>
  );
}

function Discography() {
  return (
    <div>
      <div>
        <h2 className="flex text-6xl font-semibold italic justify-center p-10">
          Albums
        </h2>
        <div className="flex flex-row flex-wrap w-full justify-center">
          <Disc artwork={portrait} title={"Portrait"} />
        </div>
      </div>

      <div>
        <h2 className="flex text-6xl font-semibold italic justify-center p-10">
          Singles/EPs
        </h2>
        <div className="flex flex-wrap w-full justify-center">
          <Disc artwork={talking} title="Talking - Single" />
          <Disc artwork={karma} title="Karma - Single" />
          <Disc
            artwork={iblfawn}
            title={`I've Been Looking For A While Now - Single`}
          />
          <Disc artwork={lashingOut} title="Lashing Out - EP" />
          <Disc artwork={stairwell} title="Stairwell - Single" />
          <Disc artwork={itinerary} title="Itinerary - EP" />
        </div>
      </div>
    </div>
  );
}

Discography.Disc = Disc;

export default Discography;

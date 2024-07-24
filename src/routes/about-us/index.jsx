import { Transition } from "@headlessui/react";
import clsx from "clsx";

import BandMember from "./member";

import tom from "../../assets/images/the-band/tom.png";
import ron from "../../assets/images/the-band/ron.png";
import elias from "../../assets/images/the-band/elias.png";
import jake from "../../assets/images/the-band/jake.png";
import nate from "../../assets/images/the-band/nate.png";

import Press from "../press";

const AboutUs = ({ location }) => {
  // TODO: implement context to adjust video BG to
  // zoom into each band member and list something
  // about them maybe?
  return (
    <div id="about-us">
      <Transition show={location === "about-us"} appear={true}>
        <div
          className={clsx(
            "w-screen text-white text-4xl",
            // Shared closed styles
            "data-[closed]:opacity-0",
            // Entering styles
            "data-[enter]:duration-100 data-[enter]:data-[closed]:-translate-x-full",
            // Leaving styles
            "data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-full"
          )}
        >
          <div className="mt-16" />
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
      </Transition>
    </div>
  );
};

export default AboutUs;

import { motion } from "framer-motion";
import clsx from "clsx";
import SEO from "../../components/seo";

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
  // about them maybe?
  return (
    <div id="about-us">
      <SEO
        title="About Ryland - Meet the Band | Los Angeles Indie Rock"
        description="Meet the members of Ryland: Tom (vocals, guitar, keys), Ron (bass), Nate (synths, vocals), Elias (drums), and Jake (guitar, producer). An indie rock band from Los Angeles making music together since 2019."
        url="https://www.weareryland.com/about-us"
        type="profile"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.6,
              delayChildren: 0.15,
              staggerChildren: 0.1,
            },
          },
          hidden: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            opacity: 0,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
              staggerChildren: 0.05,
              staggerDirection: -1,
            },
          },
        }}
        className={clsx(["w-screen text-white text-4xl"])}
      >
        <div className="mt-16" />
        <h1 className="sr-only">About Ryland - Meet the Band Members</h1>
        <h2 className="sr-only">The Band</h2>
        <h3 className="sr-only">Band Members</h3>
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
      </motion.div>
    </div>
  );
};

export default AboutUs;

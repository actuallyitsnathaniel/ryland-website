import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../../components/seo";
import { itemVariants } from "../../util/transitionPage";

import BandMember from "./member";
import PressHighlight from "../../components/press-highlight";

import tom from "../../assets/images/the-band/tom.png";
import ron from "../../assets/images/the-band/ron.png";
import elias from "../../assets/images/the-band/elias.png";
import jake from "../../assets/images/the-band/jake.png";
import nate from "../../assets/images/the-band/nate.png";

const members = [
  {
    profilePic: tom,
    name: "Tom",
    desc: `The frontman of the band. "It's all about the We." Plays keys, guitar, and sings like a songbird.`,
  },
  {
    profilePic: ron,
    name: "Ron",
    desc: `The bassist of the band. He'll riff if he feels like it.`,
  },
  {
    profilePic: nate,
    name: "Nate",
    desc: `Synths and samples guy. Sings with Tom. He'll do a little jig if he feels like it.`,
  },
  {
    profilePic: elias,
    name: "Elias",
    desc: `The drummer. He'll sing if he feels like it.`,
  },
  {
    profilePic: jake,
    name: "Jake",
    desc: `Producer and electric guitar player. He'll solo if he feels like it.`,
  },
];

const press = [
  {
    title: "Meet Thomas Wagstaffe | Lead Singer of Ryland",
    subtitle: "Write-up by 'Shoutout LA'",
    url: "https://shoutoutla.com/meet-thomas-wagstaffe-lead-singer-of-ryland/",
  },
  {
    title: "RYLAND",
    subtitle: "Write-up by 'The Artist I Am'",
    url: "https://theartistiam.cargo.site/ryland-1",
  },
];

// TODO: replace with the real band bio
const bio = `Ryland is an indie rock band from Los Angeles, making music together
since 2019. Tom, Ron, Nate, Elias, and Jake write loud, honest songs about
trying to be fine — and mostly getting there.`;

const AboutUs = () => {
  const [expanded, setExpanded] = useState(-1);
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
        className="text-white w-full
          flex flex-col lg:flex-row items-center justify-center
          gap-10 lg:gap-16"
      >
        <h1 className="sr-only">About Ryland - Meet the Band Members</h1>
        <h2 className="sr-only">The Band</h2>

        {/* Left: band + bio */}
        <div className="flex flex-col items-center gap-10 md:gap-12 text-center">
          {/* Members — 3 up top, 2 below, centered */}
          <div className="flex flex-wrap justify-center items-end gap-x-4 gap-y-4 max-w-[34rem]">
            {members.map((member, i) => (
              <BandMember
                key={member.name}
                profilePic={member.profilePic}
                name={member.name}
                desc={member.desc}
                expanded={expanded === i}
                onToggle={() => setExpanded(expanded === i ? -1 : i)}
              />
            ))}
          </div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base md:text-lg leading-relaxed text-white/80"
          >
            {bio}
          </motion.p>
        </div>

        {/* Right: press */}
        <motion.aside
          variants={itemVariants}
          className="w-full max-w-sm lg:border-l lg:border-white/15 lg:pl-16 text-center lg:text-left"
        >
          <h2 className="font-sans-grotesk text-sm tracking-[0.3em] uppercase text-white/50 mb-5">
            Press
          </h2>
          <div className="flex flex-col gap-4">
            {press.map((p) => (
              <PressHighlight
                key={p.url}
                title={p.title}
                subtitle={p.subtitle}
                url={p.url}
              />
            ))}
          </div>
        </motion.aside>
      </motion.div>
    </div>
  );
};

export default AboutUs;

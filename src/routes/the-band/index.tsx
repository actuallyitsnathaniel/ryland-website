import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SEO from "../../components/seo";
import { itemVariants } from "../../util/transitionPage";
import { pageInset, sectionTitle } from "../../util/util";

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
    listening: "Paper Kites, Parcels",
  },
  {
    profilePic: ron,
    name: "Ron",
    desc: `The bassist of the band. He'll riff if he feels like it.`,
    listening: "Mineral King",
  },
  {
    profilePic: nate,
    name: "Nate",
    desc: `Synths and samples guy. Sings with Tom. He'll do a little jig if he feels like it.`,
    listening: "Virtual Riot, svn4vr",
  },
  {
    profilePic: elias,
    name: "Elias",
    desc: `The drummer. He'll sing if he feels like it.`,
    listening: "Bobby Charles",
  },
  {
    profilePic: jake,
    name: "Jake",
    desc: `Producer and electric guitar player. He'll solo if he feels like it.`,
    listening: "Toledo, Honne",
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
since 2019. Comprised of Tom, Ron, Nate, Elias, and Jake. They love music and inventing their own sports.`;

const TheBand = () => {
  const [expanded, setExpanded] = useState(-1);
  const [shown, setShown] = useState(bio);
  const [textVisible, setTextVisible] = useState(true);
  const reduceMotion = useReducedMotion();
  const member = expanded >= 0 ? members[expanded] : null;
  const copy = member ? member.desc : bio;
  const copyRef = useRef(copy);
  copyRef.current = copy;

  useEffect(() => {
    if (copy === shown) return;
    if (reduceMotion) {
      setShown(copy);
      setTextVisible(true);
      return;
    }
    setTextVisible(false);
  }, [copy, shown, reduceMotion]);

  useEffect(() => {
    if (!member) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [member]);

  return (
    <div id="the-band">
      <SEO
        title="The band"
        description="Meet the members of Ryland: Tom (vocals, guitar, keys), Ron (bass), Nate (synths, vocals), Elias (drums), and Jake (guitar, producer). An indie rock band from Los Angeles making music together since 2019."
        url="https://www.weareryland.com/the-band"
        type="profile"
      />
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={
          reduceMotion
            ? undefined
            : {
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
              }
        }
        className={`grid w-full grid-cols-1 items-start gap-10 text-xl leading-normal text-white lg:grid-cols-3 lg:gap-x-12 ${pageInset}`}
      >
        <section
          aria-labelledby="band-heading"
          className="-mt-6 flex min-w-0 flex-col items-center gap-4 sm:mt-0 sm:gap-10 lg:col-span-2 lg:border-r lg:border-white/15 lg:pr-12"
        >
          <h1 id="band-heading" className="sr-only">
            The band
          </h1>
          <div className="flex w-full flex-wrap items-end justify-center gap-4">
            {members.map((person, i) => (
              <BandMember
                key={person.name}
                profilePic={person.profilePic}
                name={person.name}
                focused={expanded === i}
                onSelect={() => setExpanded(expanded === i ? -1 : i)}
              />
            ))}
          </div>
          <div className="grid w-full max-w-prose text-center text-xl leading-normal">
            <p className="invisible col-start-1 row-start-1" aria-hidden="true">
              {bio}
            </p>
            <p
              aria-live="polite"
              onTransitionEnd={(event) => {
                if (event.propertyName !== "opacity") return;
                if (event.target !== event.currentTarget) return;
                if (copyRef.current === shown) return;
                setShown(copyRef.current);
                setTextVisible(true);
              }}
              className={`col-start-1 row-start-1 transition-opacity duration-200 ${
                textVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {shown}
            </p>
          </div>
        </section>

        <div className="h-px w-full bg-white/15 lg:hidden" aria-hidden="true" />

        <motion.aside
          variants={itemVariants}
          aria-labelledby="press-heading"
          className="flex min-w-0 flex-col items-center gap-6 text-center lg:col-span-1"
        >
          <h2 id="press-heading" className={sectionTitle}>
            Press
          </h2>
          <div className="flex w-full flex-col gap-4">
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

export default TheBand;

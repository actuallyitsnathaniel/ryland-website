import Disc from "./disc";

import React, { useState, JSX } from "react";
import { motion } from "framer-motion";
import { itemVariants, containerVariants } from "../../util/transitionPage";

const Discography = ({ children }: { children: JSX.Element[] }) => {
  const [expanded, setExpanded] = useState(-1);

  const all = React.Children.toArray(children) as JSX.Element[];
  const renderGroup = (group: JSX.Element[]) =>
    group.map((child, i) => (
      <motion.div key={child.key || i} variants={itemVariants}>
        {React.cloneElement(child, { expanded, setExpanded, i })}
      </motion.div>
    ));

  const headingClass =
    "flex font-sans-grotesk text-[clamp(2.5rem,6vw,4.5rem)] tracking-[-0.02em] italic justify-center p-5";

  return (
    <div className="flex flex-col md:px-28">
      <div>
        <h2 className={headingClass}>Singles / EPs</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={"flex flex-wrap w-full justify-center"}
        >
          {renderGroup(all.filter((child) => !child.props.album))}
        </motion.div>
      </div>
      <div>
        <h2 className={headingClass}>Albums</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={"flex flex-row flex-wrap w-full justify-center"}
        >
          {renderGroup(all.filter((child) => child.props.album))}
        </motion.div>
      </div>
    </div>
  );
};

Discography.Disc = Disc;

export default Discography;

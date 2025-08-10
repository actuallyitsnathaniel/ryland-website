import Disc from "./disc";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { itemVariants, containerVariants } from "../../util/transitionPage";

const Discography = ({ children }: { children: JSX.Element[] }) => {
  const [expanded, setExpanded] = useState(-1);
  return (
    <div className="flex flex-col md:px-28">
      <div>
        <h2 className={"flex text-6xl  italic justify-center p-5"}>
          Singles / EPs
        </h2>
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
                delayChildren: 0.1,
                staggerChildren: 0.08,
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
          className={"flex flex-wrap w-full justify-center"}
        >
          {React.Children.map(children, (child, i) => {
            if (!child.props.album)
              return (
                <motion.div key={child.key || i} variants={itemVariants}>
                  {React.cloneElement(child, { expanded, setExpanded, i })}
                </motion.div>
              );
          })}
        </motion.div>
      </div>
      <div>
        <h2 className={"flex text-6xl  italic justify-center p-5"}>Albums</h2>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={"flex flex-row flex-wrap w-full justify-center"}
        >
          {React.Children.map(children, (child, i) => {
            if (child.props.album)
              return (
                <motion.div key={child.key || i} variants={itemVariants}>
                  {React.cloneElement(child, { expanded, setExpanded, i })}
                </motion.div>
              );
          })}
        </motion.div>
      </div>
    </div>
  );
};

Discography.Disc = Disc;

export default Discography;

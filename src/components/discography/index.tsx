import Disc from "./disc";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../../util/transitionPage";

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
              transition: {
                type: "spring",
                bounce: 1,
                duration: 0.7,
                delayChildren: 0.2,
                staggerChildren: 0.1,
              },
            },
            hidden: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          className={"flex flex-wrap w-full justify-center"}
        >
          {React.Children.map(children, (child, i) => {
            if (!child.props.album)
              return (
                <motion.div variants={itemVariants}>
                  {React.cloneElement(child, { expanded, setExpanded, i })}
                </motion.div>
              );
          })}
        </motion.div>
      </div>
      <div>
        <h2 className={"flex text-6xl  italic justify-center p-5"}>Albums</h2>
        <div className={"flex flex-row flex-wrap w-full justify-center"}>
          {React.Children.map(children, (child, i) => {
            if (child.props.album)
              return (
                <motion.div variants={itemVariants}>
                  {React.cloneElement(child, { expanded, setExpanded, i })}
                </motion.div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

Discography.Disc = Disc;

export default Discography;

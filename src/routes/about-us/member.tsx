import { useState } from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../../util/transitionPage";

type BandMember = {
  i: number;
  profilePic: string;
  name: string;
  desc: string;
};

const BandMember = ({ i, profilePic, name, desc }: BandMember) => {
  const [expanded, setExpanded] = useState(-1);
  const setActiveMember = (i: number) => {
    if (i === expanded) {
      setExpanded(-1);
    } else {
      setExpanded(i);
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      onClick={() => {
        setActiveMember(i);
      }}
      whileHover={expanded !== i ? { scale: 1.05 } : {}}
      whileTap={expanded !== i ? { scale: 0.98 } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.2
      }}
      className={`${
        expanded === i
          ? `flex flex-col justify-center top-0 fixed z-[1] col-span-1 transition-transform 
        origin-center bg-origin-top duration-150 place-items-center
         bg-black bg-opacity-50 backdrop-blur-lg w-screen h-screen`
          : `flex flex-col xl:basis-1/3 items-center p-3`
      }`}
    >
      <img
        src={profilePic}
        alt={name}
        className={`${
          expanded === i
            ? `pt-16 h-[345px] md:h-[400px]`
            : `max-w-xs w-[66%] p-3`
        }`}
        loading="eager"
      />
      <p className="self-center p-3">{`${name}`}</p>
      <div
        className={`${
          expanded === i
            ? `transition-all duration-75 ease-in-out 
            scale-100 text-lg text-start mx-10 mb-7`
            : `scale-0 hidden`
        }`}
      >
        {`${desc}`}
      </div>
    </motion.div>
  );
};

export default BandMember;

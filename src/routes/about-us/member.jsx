import { useState } from "react";
const BandMember = (props) => {
  const [expanded, setExpanded] = useState(-1);
  const setActiveMember = (i) => {
    if (i === expanded) {
      setExpanded(-1);
    } else {
      setExpanded(i);
    }
  };

  return (
    <div
      onClick={() => {
        setActiveMember(props.i);
      }}
      className={`transition-all ease-in-out ${
        expanded === props.i
          ? `flex flex-col justify-center top-0 fixed z-[1] col-span-1 transition-transform 
        origin-center bg-origin-top duration-150 place-items-center
         bg-black bg-opacity-70 backdrop-blur-lg w-screen h-screen`
          : `flex flex-col duration-150 
          md:hover:scale-110 xl:basis-1/3 items-center p-3`
      }`}
    >
      <img
        src={props.profilePic}
        alt={props.name}
        className={`${
          expanded === props.i
            ? `pt-16 h-[345px] md:h-[400px]`
            : `max-w-xs w-[66%] p-3`
        }`}
        loading="eager"
      />
      <p className="self-center p-3">{`${props.name}`}</p>
      <div
        className={`${
          expanded === props.i
            ? `transition-all duration-75 ease-in-out 
            scale-100 text-lg text-start mx-10 mb-7`
            : `scale-0 hidden`
        }`}
      >
        {`${props.desc}`}
      </div>
    </div>
  );
};

export default BandMember;

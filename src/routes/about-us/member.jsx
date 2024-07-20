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

  // Tailwind declarations for band members set up an an array

  // 0 = wrapper
  // 1 = profile-pic
  // 2 = description text

  const focused = [
    "fixed z-[1] top-0 grid col-span-1 transition-transform origin-center bg-origin-top duration-150 place-items-center bg-black bg-opacity-70 backdrop-blur-lg w-screen h-screen",
    "pt-10 h-[345px] md:h-[400px]",
    "transition-all duration-75 ease-in-out scale-100 text-sm text-lg text-start mx-10 mb-7",
  ];

  const unfocused = [
    "flex flex-col transition-all ease-in-out duration-150 md:hover:scale-110 flex xl:basis-1/3 items-center p-3",
    "max-w-xs w-[66%] p-3",
    "scale-0 hidden",
  ];

  return (
    <div
      onClick={() => {
        setActiveMember(props.i);
      }}
      className={`${expanded === props.i ? focused[0] : unfocused[0]}`}
    >
      <img
        src={props.profilePic}
        alt={props.name}
        className={`${expanded === props.i ? focused[1] : unfocused[1]}`}
      />
      <p className="self-center p-3">{`${props.name}`}</p>
      <div className={`${expanded === props.i ? focused[2] : unfocused[2]}`}>
        {`${props.desc}`}
      </div>
    </div>
  );
};

export default BandMember;

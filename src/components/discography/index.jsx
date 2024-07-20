import Disc from "./disc";

import React, { useState } from "react";
import { PropTypes } from "prop-types";

const Discography = ({ children }) => {
  const [expanded, setExpanded] = useState(-1);
  return (
    <div className="flex flex-col md:px-28">
      <div>
        <h2 className={"flex text-6xl  italic justify-center p-5"}>
          singles / EPs
        </h2>
        <div className={"flex flex-wrap w-full justify-center"}>
          {React.Children.map(children, (child, i) => {
            if (!child.props.album)
              return React.cloneElement(child, { expanded, setExpanded, i });
          })}
        </div>
      </div>
      <div>
        <h2 className={"flex text-6xl  italic justify-center p-5"}>albums</h2>
        <div className={"flex flex-row flex-wrap w-full justify-center"}>
          {React.Children.map(children, (child, i) => {
            if (child.props.album)
              return React.cloneElement(child, { expanded, setExpanded, i });
          })}
        </div>
      </div>
    </div>
  );
};

Discography.propTypes = {
  children: PropTypes.array,
};

Discography.Disc = Disc;

export default Discography;

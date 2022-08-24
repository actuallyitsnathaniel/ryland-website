import React from "react";
import Discography from "../../components/discography";

function Music() {
  return (
    <div className="flex flex-wrap mt-16 justify-center text-white">
      <Discography>
        <Discography.Albums>
          <Discography.Disc />
        </Discography.Albums>
        <Discography.SinglesAndEPs>
          <Discography.Disc />
        </Discography.SinglesAndEPs>
      </Discography>
    </div>
  );
}

export default Music;

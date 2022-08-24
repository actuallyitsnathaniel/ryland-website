import React from "react";

function Disc() {
  return (
    <div className="transition-scale duration-150 flex text-8xl h-[250px] justify-center items-middle p-2 hover:scale-110">
      📀
    </div>
  );
}

function Discography() {
  return (
    <div className="justify-center">
      <h1 className="flex text-6xl justify-center">Discography</h1>
      <div className="columns-2 w-screen">
        <Disc />
        <Disc />
        <Disc />
        <Disc />
      </div>
    </div>
  );
}

Discography.Disc = Disc;

export default Discography;

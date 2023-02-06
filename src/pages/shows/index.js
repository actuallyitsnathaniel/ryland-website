import React from "react";
import Jan19 from "../../components/show-link/jan19";

function Shows() {
  return (
    <main className="flex flex-col text-center min-h-full md:mt-16 p-3 text-white">
      <div className="md:p-3" hidden>
        <Jan19 />
      </div>
    </main>
  );
}

export default Shows;

import React from "react";
import { Link } from "react-router-dom";

// import closeIcon from "../../assets/images/icons/navbar/close-icon.svg";
// https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state

function NavBar() {
  return (
    <nav className="grid grid-cols-1 lg:grid-cols-5 text-4xl text-white text-center p-5 font-semibold">
      <Link className="whitespace-nowrap flex-1" to="/home">
        Home
      </Link>
      <Link className="whitespace-nowrap" to="/about-us">
        About Us
      </Link>
      <Link className="whitespace-nowrap" to="/contact">
        Contact
      </Link>
      <Link className="whitespace-nowrap" to="/merch">
        Merch
      </Link>
      <Link className="whitespace-nowrap" to="/shows">
        Shows
      </Link>
      {/* <img src={closeIcon} alt="close-icon" className="" /> */}
    </nav>
  );
}

export default NavBar;

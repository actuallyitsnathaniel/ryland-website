import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as HamburgerIcon } from "../../assets/images/icons/navbar/hamburger-icon.svg";

import { ReactComponent as CloseIcon } from "../../assets/images/icons/navbar/close-icon.svg";

// https://flowbite.com/docs/components/navbar/#default-navbar

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="text-white p-2.5 font-semibold">
      <div class="grid grid-cols-2">
        <a href="/home" className="md:hidden p-3 text-4xl">
          🛌
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class={`md:hidden p-3 place-self-end`}
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        <div
          className={`flex ${
            expanded ? "block" : "hidden"
          } md:block md:grid justify-center col-span-2`}
          id="navbar-default"
        >
          <ul class="grid grid-col-1 md:flex md:flex-auto justify-items-center md:m-4 whitespace-nowrap">
            <Link className="p-1 text-2xl" to="/home" aria-current="page">
              Home
            </Link>
            <Link className="p-1 text-2xl" to="/about-us">
              About Us
            </Link>
            <Link className="p-1 text-2xl" to="/contact">
              Contact
            </Link>
            <Link className="p-1 text-2xl" to="/merch">
              Merch
            </Link>
            <Link className="p-1 text-2xl" to="/shows">
              Shows
            </Link>
          </ul>
        </div>

        {/* <img src={closeIcon} alt="close-icon" className="" /> */}
      </div>
    </nav>
  );
}

export default NavBar;

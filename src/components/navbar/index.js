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
      </div>
      <div
        className={`${expanded ? "block" : "hidden"} md:block`}
        id="navbar-default"
      >
        <ul class="flex flex-col md:flex-row items-center justify-between md:mx-14 my-3 text-3xl whitespace-nowrap">
          <Link
            className="p-1 transition ease-in-out duration-300 hover:scale-110"
            to="/home"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            className="p-1 transition ease-in-out duration-300 hover:scale-110"
            to="/about-us"
          >
            About Us
          </Link>
          <Link
            className="p-1 transition ease-in-out duration-300 hover:scale-110"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="p-1 transition ease-in-out duration-300 hover:scale-110"
            to="/merch"
          >
            Merch
          </Link>
          <Link
            className="p-1 transition ease-in-out duration-300 hover:scale-110"
            to="/shows"
          >
            Shows
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

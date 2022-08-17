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
        <a id="person-bed-icon" href="/home" className="md:hidden p-3 text-4xl">
          🛌
        </a>
        <button
          data-collapse-toggle="navbar"
          id="navbar-icon"
          type="button"
          class={`md:hidden p-3 place-self-end`}
          aria-controls="navbar"
          aria-expanded="false"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>
      <div
        id="nav-wrapper"
        className={` transition-all h-0 origin-top-right duration-100 md:block
        ${expanded ? "scale-100 h-36" : "scale-0"} md:scale-100 md:h-full
        `}
      >
        <ul id="nav-bar" className={`nav-bar `}>
          <Link
            className={"nav-item"}
            to="/home"
            aria-current="page"
            onClick={() => setExpanded(false)}
          >
            Home
          </Link>
          <Link
            className={"nav-item"}
            to="/about-us"
            onClick={() => setExpanded(false)}
          >
            About Us
          </Link>
          <Link
            className={"nav-item"}
            to="/contact"
            onClick={() => setExpanded(false)}
          >
            Contact
          </Link>
          <Link
            className={"nav-item"}
            to="/merch"
            onClick={() => setExpanded(false)}
          >
            Merch
          </Link>
          <Link
            className={"nav-item"}
            to="/shows"
            onClick={() => setExpanded(false)}
          >
            Shows
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as HamburgerIcon } from "../../assets/images/icons/navbar/hamburger-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/icons/navbar/close-icon.svg";

// https://flowbite.com/docs/components/navbar/#default-navbar

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  var navWrapper = `${expanded ? "block" : "hidden"} md:block`;
  var navBar =
    "transition-opacity ease-in-out duration-300 flex flex-col md:flex-row items-center justify-between md:mx-14 my-3 text-3xl whitespace-nowrap";
  var navItem =
    "p-1 transition ease-in-out duration-170 hover:scale-110 hover:text-orange-300";

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
      <div className={navWrapper} id="navbar">
        <ul class={navBar}>
          <Link
            className={navItem}
            to="/home"
            aria-current="page"
            onClick={() => setExpanded(false)}
          >
            Home
          </Link>
          <Link
            className={navItem}
            to="/about-us"
            onClick={() => setExpanded(false)}
          >
            About Us
          </Link>
          <Link
            className={navItem}
            to="/contact"
            onClick={() => setExpanded(false)}
          >
            Contact
          </Link>
          <Link
            className={navItem}
            to="/merch"
            onClick={() => setExpanded(false)}
          >
            Merch
          </Link>
          <Link
            className={navItem}
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

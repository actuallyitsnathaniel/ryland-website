import React, { useState, useEffect } from "react";
import { Link, useLocation, withRouter } from "react-router-dom";

import { ReactComponent as HamburgerIcon } from "../../assets/images/icons/navbar/hamburger-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/icons/navbar/close-icon.svg";

// https://tailwindcss.com/blog/utility-friendly-transitions-with-tailwindui-react

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const [pageTitle, setPageTitle] = useState("");

  let curLoc = useLocation();

  useEffect(() => {
    const titleMap = [
      { path: "/", title: "Home" },
      { path: "/home", title: "Home" },
      { path: "/about-us", title: "About Us" },
      { path: "/contact", title: "Contact" },
      { path: "/music", title: "Music" },
      { path: "/merch", title: "Merch" },
      { path: "/shows", title: "Shows" },
      { path: "/secret", tite: "Secret" },
    ];

    const curTitle = titleMap.find((item) => item.path === curLoc.pathname);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = curTitle.title;
    }
  }, [curLoc]);

  return (
    <nav className="text-white p-2.5 font-semibold">
      <div class="flex justify-between">
        <a
          id="person-bed-icon"
          href="/home"
          className="md:hidden p-3.5 text-4xl"
        >
          🛌
        </a>
        <div className="md:hidden p-3 justify-center text-5xl whitespace-nowrap">
          {pageTitle}
          {/*{[
            location.pathname.substring(1).charAt(0).toUpperCase(),
            location.pathname.substring(2),
          ]}*/}
        </div>
        <button
          data-collapse-toggle="navbar"
          id="navbar-icon"
          type="button"
          class={`md:hidden p-3 justify-end`}
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
        className={`transition-all h-0 origin-top duration-100 md:block
        ${expanded ? "scale-100 h-full" : "scale-0"} md:scale-100 md:h-full
        `}
      >
        <ul id="nav-bar" className={`nav-bar`}>
          <Link
            className={`nav-item ${
              curLoc.pathname === "/home" ? "nav-item-active" : ""
            }`}
            to="/home"
            aria-current="page"
            onClick={() => setExpanded(false)}
          >
            Home
          </Link>
          <Link
            className={`nav-item ${
              curLoc.pathname === "/about-us" ? "nav-item-active" : ""
            }`}
            to="/about-us"
            onClick={() => setExpanded(false)}
          >
            About Us
          </Link>
          <Link
            className={`nav-item ${
              curLoc.pathname === "/contact" ? "nav-item-active" : ""
            }`}
            to="/contact"
            onClick={() => setExpanded(false)}
          >
            Contact
          </Link>
          <Link
            className={`nav-item ${
              curLoc.pathname === "/music" ? "nav-item-active" : ""
            }`}
            to="/music"
            onClick={() => setExpanded(false)}
          >
            Music
          </Link>
          <Link
            className={`nav-item ${
              curLoc.pathname === "/merch" ? "nav-item-active" : ""
            }`}
            to="/merch"
            onClick={() => setExpanded(false)}
          >
            Merch
          </Link>
          <Link
            className={`nav-item ${
              curLoc.pathname === "/shows" ? "nav-item-active" : ""
            }`}
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

export default withRouter(NavBar);

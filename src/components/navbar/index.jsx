import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { MobileNavHeader } from "./mobile-nav-header";
import { NavItem } from "./nav-item";

// https://tailwindcss.com/blog/utility-friendly-transitions-with-tailwindui-react

function usePageTitle(location) {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const titleMap = [
      { path: "/", title: "Home" },
      { path: "/home", title: "Home" },
      { path: "/home/", title: "Home" },
      { path: "/about-us", title: "About Us" },
      { path: "/contact", title: "Contact" },
      { path: "/music", title: "Music" },
      { path: "/merch", title: "Merch" },
      { path: "/shows", title: "Shows" },
      { path: "/secret", title: "Secret" },
      { path: "/links", title: "Links" },
    ];

    const curTitle = titleMap.find((item) => item.path === location);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = "Ryland - " + curTitle.title;
    }
  }, [location]);

  return pageTitle;
}

const NavItems = ({ expanded, setExpanded, pageTitle }) => {
  return (
    <ul id="nav-bar" className={`nav-bar`}>
      <NavItem
        pageTitle={pageTitle}
        title="Home"
        to="/home"
        {...{ setExpanded }}
      />
      <NavItem
        pageTitle={pageTitle}
        title="Music"
        to="/music"
        {...{ setExpanded }}
      />
      <NavItem
        pageTitle={pageTitle}
        title="About Us"
        to="/about-us"
        {...{ setExpanded }}
      />
      <NavItem
        pageTitle={pageTitle}
        title="Links"
        to="/links"
        hidden
        {...{ setExpanded }}
      />
      <NavItem
        pageTitle={pageTitle}
        title="Merch"
        to="/merch"
        hidden
        {...{ setExpanded }}
      />
      <NavItem
        pageTitle={pageTitle}
        title="Shows"
        to="/shows"
        hidden
        {...{ setExpanded }}
      />
    </ul>
  );
};

const MobileNav = ({ expanded, setExpanded, pageTitle }) => {
  return (
    <div id="nav-bar" className="overflow-visible">
      <div className="h-20 backdrop-blur-sm"></div>
      <nav
        className={`fixed text-white w-screen top-0 font-semibold transition-all bg-opacity-0 ${
          pageTitle.includes("Links") && "hidden"
        } ${
          expanded &&
          "backdrop-blur-sm bg-black bg-opacity-75 pb-4 overflow-visible"
        }`}
      >
        <MobileNavHeader
          expanded={expanded}
          setExpanded={setExpanded}
          pageTitle={pageTitle}
        />
        <div
          id="nav-items-wrapper"
          className={`w-screen mx-auto my-auto origin-top duration-150 scale-0 ${
            expanded && "scale-100"
          }`}
        >
          <NavItems {...{ expanded, setExpanded, pageTitle }} />
        </div>
      </nav>
    </div>
  );
};

const DesktopNav = ({ pageTitle, expanded, setExpanded }) => {
  return (
    <nav
      className={`text-white p-2.5 font-semibold ${
        pageTitle.includes("Links") ? "hidden" : ""
      }`}
    >
      <div
        id="nav-wrapper"
        className={`transition-all origin-top duration-100`}
      >
        <NavItems />
      </div>
    </nav>
  );
};

const NavBar = () => {
  const [windowDimension, setWindowDimension] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isMobile = windowDimension <= 640;

  let pageTitle = usePageTitle(useLocation().pathname);

  return isMobile ? (
    <MobileNav {...{ expanded, setExpanded, isMobile, pageTitle }} />
  ) : (
    <DesktopNav {...{ expanded, setExpanded, isMobile, pageTitle }} />
  );
};

export default NavBar;

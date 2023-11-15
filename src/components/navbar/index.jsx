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

const MobileNav = ({ expanded, setExpanded, pageTitle }) => {
  return (
    <nav
      className={`text-white w-screen fixed font-semibold ${
        pageTitle.includes("Links") ? "hidden" : ""
      }`}
    >
      <MobileNavHeader
        expanded={expanded}
        setExpanded={setExpanded}
        pageTitle={pageTitle}
      />

      <div
        id="nav-wrapper"
        className={`transition-all origin-top duration-150 translate-x-1
    ${expanded ? "scale-100" : "scale-0"}
    `}
      >
        <ul id="nav-bar" className={`nav-bar`}>
          <NavItem
            pageTitle={pageTitle}
            title="Home"
            to="/home"
            {...{ setExpanded }}
          />
          <NavItem
            pageTitle={pageTitle}
            title="About Us"
            to="/about-us"
            {...{ setExpanded }}
          />
          {/**
        <Link
          className={`nav-item ${
            pageTitle === "Links" ? "nav-item-active" : ""
          }`}
          to="/links"
          onClick={() => setExpanded(false)}
        >
          Contact & Links
        </Link>
        */}
          <NavItem
            pageTitle={pageTitle}
            title="Music"
            to="/music"
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
      </div>
    </nav>
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
        className={`transition-all h-0 origin-top duration-100 md:block
  ${expanded ? "scale-100 h-full" : "scale-0"} md:scale-100 
  `}
      >
        <ul id="nav-bar" className={`nav-bar`}>
          <NavItem
            pageTitle={pageTitle}
            title="Home"
            to="/home"
            {...{ setExpanded }}
          />
          <NavItem
            pageTitle={pageTitle}
            title="About Us"
            to="/about-us"
            {...{ setExpanded }}
          />

          {/**
      <Link
        className={`nav-item ${
          pageTitle === "Links" ? "nav-item-active" : ""
        }`}
        to="/links"
        onClick={() => setExpanded(false)}
      >
        Contact & Links
      </Link>
      */}
          <NavItem
            pageTitle={pageTitle}
            title="Music"
            to="/music"
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

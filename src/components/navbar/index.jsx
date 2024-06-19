import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { MobileNavHeader } from "./mobile-nav-header";
import { NavItem } from "./nav-item";
import { SocialLinks } from "../social-links";

// https://tailwindcss.com/blog/utility-friendly-transitions-with-tailwindui-react

export const usePageTitle = (location) => {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const titleMap = [
      { path: "/", title: "Home" },
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
};

const NavItems = ({ classNames, setExpanded, pageTitle }) => {
  return (
    <ul
      id="nav-bar"
      className={`flex text-3xl sm:justify-around ${classNames}`}
    >
      <NavItem pageTitle={pageTitle} title="Home" to="/" {...{ setExpanded }} />
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
        title="Contact"
        to="/contact"
        {...{ setExpanded }}
      />
      {/* <NavItem
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
      /> */}
    </ul>
  );
};

const MobileNav = ({ expanded, setExpanded, pageTitle }) => {
  return (
    <div id="nav-bar">
      <div className="h-20" id="mobile-nav-padding"></div>
      <nav
        className={`fixed z-[1] bg-gradient-to-b from-black h-30 to-transparent text-white w-screen top-0 font-semibold transition-all bg-opacity-0 ${
          pageTitle.includes("Links") && "hidden"
        } ${expanded && "bg-black h-3/4"}`}
      >
        <MobileNavHeader
          expanded={expanded}
          setExpanded={setExpanded}
          pageTitle={pageTitle}
        />
        <div
          id="nav-wrapper"
          className={`w-screen flex justify-center origin-top duration-150 h-0 scale-0 ${
            expanded && "scale-100 h-full"
          }`}
        >
          <NavItems
            classNames={`flex flex-col items-center h-full`}
            {...{ expanded, setExpanded, pageTitle }}
          />
        </div>
      </nav>
    </div>
  );
};

const DesktopNav = ({ pageTitle }) => {
  return (
    <>
      <nav
        className={`flex fixed px-6 text-white origin-top pt-3 font-semibold 
      transition-all duration-100 ease-in-out whitespace-nowrap ${
        pageTitle.includes("Links") ? "hidden" : ""
      }`}
      >
        <div>
          <NavItems {...{ pageTitle }} />
        </div>

        <div className="fixed right-4">
          <SocialLinks />
        </div>
      </nav>
      <div id="nav-bar-spacer" className="pt-20" />
    </>
  );
};

const NavBar = () => {
  const [windowDimension, setWindowDimension] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const isMobile = windowDimension <= 640;

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

  let pageTitle = usePageTitle(useLocation().pathname);

  return isMobile ? (
    <MobileNav {...{ expanded, setExpanded, isMobile, pageTitle }} />
  ) : (
    <DesktopNav {...{ expanded, setExpanded, isMobile, pageTitle }} />
  );
};

export default NavBar;

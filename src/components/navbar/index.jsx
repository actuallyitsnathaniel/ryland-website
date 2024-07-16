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

const NavItems = ({ classNames, setExpanded, pageTitle, setModalOpen }) => {
  return (
    <ul
      id="nav-bar"
      className={`flex text-3xl lowercase sm:justify-around ${
        classNames && classNames
      }`}
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
      <button
        className={`flex transition ease-in-out p-4 px-4 duration-150 hover:scale-110 hover:text-orange-200 cursor-pointer ${
          pageTitle == "Contact"
            ? "transition ease-in text-orange-300 md:scale-110 hidden sm:inline-block"
            : ""
        }`}
        onClick={() => setModalOpen(true)}
        {...{ setExpanded }}
      >
        contact
      </button>
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

const MobileNav = ({ expanded, setExpanded, pageTitle, setModalOpen }) => {
  return (
    <div id="nav-bar">
      <div className="h-20" id="mobile-nav-padding"></div>
      <nav
        className={`fixed z-[1] bg-gradient-to-b from-black h-30 to-transparent text-white w-screen top-0  transition-all bg-opacity-0 ${
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
            {...{ expanded, setExpanded, pageTitle, setModalOpen }}
          />
        </div>
      </nav>
    </div>
  );
};

const DesktopNav = ({ pageTitle, setModalOpen }) => {
  return (
    <div className="backdrop-blur-sm bg-orange-900 bg-opacity-15">
      <nav
        className={`flex w-1/2 fixed px-6 text-white origin-top pt-3  
      transition-all duration-100 ease-in-out whitespace-nowrap ${
        pageTitle.includes("Links") ? "hidden" : ""
      }`}
      >
        <NavItems
          classNames={"w-full justify-stretch"}
          {...{ pageTitle, setModalOpen }}
        />
        <div className="fixed right-4">
          <SocialLinks />
        </div>
      </nav>
      <div id="nav-bar-spacer" className="pt-20 " />
    </div>
  );
};

const NavBar = ({ setModalOpen }) => {
  const [windowDimension, setWindowDimension] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const isMobile = windowDimension <= 822; // custom width for custom navbar

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

  return (
    <div className="z-10">
      {isMobile ? (
        <MobileNav
          {...{ expanded, setExpanded, isMobile, pageTitle, setModalOpen }}
        />
      ) : (
        <DesktopNav
          {...{ expanded, setExpanded, isMobile, pageTitle, setModalOpen }}
        />
      )}
    </div>
  );
};

export default NavBar;

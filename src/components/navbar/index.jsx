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
      { path: "/", title: "home" },
      { path: "#about-us", title: "about us" },
      { path: "#contact", title: "contact" },
      { path: "#music", title: "music" },
      { path: "#merch", title: "merch" },
      { path: "#shows", title: "shows" },
      { path: "#secret", title: "secret" },
      { path: "#links", title: "links" },
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
      className={`flex text-3xl sm:justify-around ${
        !!classNames && classNames
      }`}
    >
      <NavItem
        pageTitle={pageTitle}
        title="home"
        to="#home"
        {...{ setExpanded }}
      />
      <NavItem
        pageTitle={pageTitle}
        title="music"
        to="#music"
        {...{ setExpanded }}
      />
      <NavItem
        pageTitle={pageTitle}
        title="about us"
        to="#about-us"
        {...{ setExpanded }}
      />
      <button
        className={`flex transition ease-in-out p-4 px-4 duration-150 
          hover:scale-110 hover:text-orange-200 cursor-pointer ${
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
      <nav
        className={`fixed z-[1] backdrop-blur-md h-30 text-white w-screen top-0 transition-all bg-opacity-0 ${
          pageTitle.includes("Links") && "hidden"
        } ${expanded && "bg-black bg-opacity-80 h-full"}`}
      >
        <MobileNavHeader
          expanded={expanded}
          setExpanded={setExpanded}
          pageTitle={pageTitle}
        />
        <div
          id="nav-wrapper"
          className={`w-screen flex justify-center origin-top duration-150 h-0 scale-0 ${
            expanded && "scale-100 h-[80%]"
          }`}
        >
          <NavItems
            classNames={`flex flex-col justify-around items-center`}
            {...{ expanded, setExpanded, pageTitle, setModalOpen }}
          />
        </div>
      </nav>
    </div>
  );
};

const DesktopNav = ({ pageTitle, setModalOpen }) => {
  return (
    <div className="fixed flex flex-row w-screen top-0 backdrop-blur-0 bg-opacity-35">
      <nav
        className={`flex w-1/3 px-6 text-white items-center
      transition-all duration-100 ease-in-out whitespace-nowrap ${
        pageTitle.includes("Links") ? "hidden" : ""
      }`}
      >
        <NavItems
          classNames={"w-full justify-between gap-0"}
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
    <div id="navbar" className="z-[2]">
      <div className="pt-20" id="mobile-nav-padding"></div>
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

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { DesktopNav } from "./desktop/desktop-nav";
import { MobileNav } from "./mobile/mobile-nav";

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
    <div id="navbar" className="fixed z-[2]">
      {/* TODO: fix navigation. currently goes to top of page. don't want that. */}
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

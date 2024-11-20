import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";

import { DesktopNav } from "./desktop/desktop-nav";
import { MobileNav } from "./mobile/mobile-nav";

export const usePageTitle = (location: string) => {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const titleMap = [
      { path: "/", title: "home" },
      { path: "/about-us", title: "about us" },
      { path: "/contact", title: "contact" },
      { path: "/music", title: "music" },
      { path: "/merch", title: "merch" },
      { path: "/shows", title: "shows" },
      { path: "/imgonnabefine", title: "i'm gonna be fine" },
      { path: "/secret", title: "secret" },
      { path: "/links", title: "links" },
    ];

    const curTitle = titleMap.find((item) => item.path === location);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = "ryland - " + curTitle.title;
    }
  }, [location]);

  return pageTitle;
};

const NavBar = ({
  setModalOpen,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [windowDimension, setWindowDimension] = useState(window.innerWidth);
  const [expanded, setExpanded] = useState(false);
  const isMobile = windowDimension <= 1050; // custom width for custom navbar

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

  const pageTitle = usePageTitle(useLocation().pathname);

  return (
    <div
      id="navbar"
      className={`fixed z-[2] ${pageTitle.includes("links") && "hidden"}`}
    >
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

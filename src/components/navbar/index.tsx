import { useState, useEffect, useCallback, useMemo, Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";

import { DesktopNav } from "./desktop/desktop-nav";
import { MobileNav } from "./mobile/mobile-nav";

// Memoize the title map to prevent recreation on every hook call
const TITLE_MAP = [
  { path: "/", title: "Home" },
  { path: "/about-us", title: "About Us" },
  { path: "/contact", title: "Contact" },
  { path: "/music", title: "Music" },
  { path: "/merch", title: "Merch" },
  { path: "/shows", title: "Shows" },
  { path: "/imgonnabefine", title: "I'm Gonna Be Fine" },
  { path: "/secret", title: "Secret" },
  { path: "/links", title: "Links" },
];

export const usePageTitle = (location: string) => {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const curTitle = TITLE_MAP.find((item) => item.path === location);
    if (curTitle?.title) {
      setPageTitle(curTitle.title);
      document.title = "Ryland - " + curTitle.title;
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
  const location = useLocation();
  
  // Memoize mobile check to prevent recalculation
  const isMobile = useMemo(() => windowDimension <= 1300, [windowDimension]);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    const timeoutId = setTimeout(() => {
      setWindowDimension(window.innerWidth);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const pageTitle = usePageTitle(location.pathname);

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

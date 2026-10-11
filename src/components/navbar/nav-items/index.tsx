import { Dispatch, SetStateAction } from "react";
import { NavItem } from "./nav-item";

type NavItemsType = {
  classNames: string;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  pageTitle: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const NavItems = ({
  classNames,
  setExpanded,
  pageTitle,
  setModalOpen,
}: NavItemsType) => {
  return (
    <ul
      className={`flex text-3xl tracking-[-0.02em] sm:justify-around sm:gap-x-3 min-[1301px]:text-2xl ${
        !!classNames && classNames
      }`}
    >
      <NavItem title="Home" to="/" {...{ pageTitle, setExpanded }} />
      <NavItem title="Music" to="/music" {...{ pageTitle, setExpanded }} />
      <NavItem
        title="About us"
        to="/about-us"
        {...{ pageTitle, setExpanded }}
      />
      <NavItem
        title="I'm Gonna Be Fine"
        to="/imgonnabefine"
        {...{ pageTitle, setExpanded }}
      />
      <NavItem title="Shows" to="/shows" {...{ pageTitle, setExpanded }} />
      <button
        className="inline-flex min-h-11 cursor-pointer items-center px-3 text-3xl tracking-[-0.02em] transition-colors duration-200 hover:text-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 min-[1301px]:text-2xl"
        onClick={() => {
          setExpanded(false);
          setModalOpen(true);
        }}
      >
        Contact
      </button>
    </ul>
  );
};

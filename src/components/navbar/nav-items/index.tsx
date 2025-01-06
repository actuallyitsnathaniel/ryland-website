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
      id="nav-bar"
      className={`flex text-3xl sm:justify-around sm:gap-x-5 ${
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
        className={`flex transition ease-in-out p-4 px-4 duration-150
            hover:scale-110 hover:text-orange-200 cursor-pointer`}
        onClick={() => setModalOpen(true)}
      >
        Contact
      </button>
    </ul>
  );
};

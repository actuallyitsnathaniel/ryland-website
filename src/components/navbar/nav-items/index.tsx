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
      <li className="flex max-sm:has-[.hidden]:hidden">
        <NavItem title="Home" to="/" {...{ pageTitle, setExpanded }} />
      </li>
      <li className="flex max-sm:has-[.hidden]:hidden">
        <NavItem title="Music" to="/music" {...{ pageTitle, setExpanded }} />
      </li>
      <li className="flex max-sm:has-[.hidden]:hidden">
        <NavItem
          title="The band"
          to="/the-band"
          {...{ pageTitle, setExpanded }}
        />
      </li>
      <li className="flex max-sm:has-[.hidden]:hidden">
        <NavItem
          title="I'm gonna be fine"
          to="/imgonnabefine"
          {...{ pageTitle, setExpanded }}
        />
      </li>
      <li className="flex max-sm:has-[.hidden]:hidden">
        <NavItem title="Shows" to="/shows" {...{ pageTitle, setExpanded }} />
      </li>
      <li className="flex">
        <button
          className="inline-flex min-h-11 cursor-pointer items-center px-3 text-3xl tracking-[-0.02em] transition-colors duration-200 hover:text-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 min-[1301px]:text-2xl"
          onClick={() => {
            setExpanded(false);
            setModalOpen(true);
          }}
        >
          Contact
        </button>
      </li>
    </ul>
  );
};

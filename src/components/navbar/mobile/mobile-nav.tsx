import { MobileNavHeader } from "./mobile-nav-header";
import { NavItems } from "../nav-items";
import { Dispatch, SetStateAction } from "react";

type MobileNavType = {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  pageTitle: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileNav = ({
  expanded,
  setExpanded,
  pageTitle,
  setModalOpen,
}: MobileNavType) => {
  return (
    <div id="nav-bar">
      <nav
        className={`fixed z-[1] h-30 text-white w-screen top-0 transition-all bg-opacity-0 ${
          pageTitle.includes("links") && "hidden"
        } ${expanded && "bg-black bg-opacity-80 backdrop-blur-md h-full"}`}
      >
        <MobileNavHeader {...{ expanded, setExpanded, pageTitle }} />
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

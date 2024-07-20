import { MobileNavHeader } from "./mobile-nav-header";
import { NavItems } from "../nav-items";

export const MobileNav = ({
  expanded,
  setExpanded,
  pageTitle,
  setModalOpen,
}) => {
  return (
    <div id="nav-bar">
      <nav
        className={`fixed z-[1] backdrop-blur-md h-30 text-white w-screen top-0 transition-all bg-opacity-0 ${
          pageTitle.includes("Links") && "hidden"
        } ${expanded && "bg-black bg-opacity-80 h-full"}`}
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

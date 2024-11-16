import { Dispatch, SetStateAction } from "react";
import SocialLinks from "../../social-links";
import { NavItems } from "../nav-items";

type DesktopNavType = {
  pageTitle: string;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const DesktopNav = ({
  pageTitle,
  setExpanded,
  setModalOpen,
}: DesktopNavType) => {
  return (
    <div className="flex flex-row w-screen top-0 backdrop-blur-0 bg-opacity-35">
      <nav
        className={`flex w-1/3 px-6 text-white items-center
        transition-all duration-100 ease-in-out whitespace-nowrap ${
          pageTitle.includes("links") && "hidden"
        }`}
      >
        <NavItems
          classNames={"w-full justify-between gap-0"}
          {...{ pageTitle, setExpanded, setModalOpen }}
        />
        <div className="fixed right-4">
          <SocialLinks />
        </div>
      </nav>
    </div>
  );
};

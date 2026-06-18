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
    <header className="fixed top-0 inset-x-0 z-50 h-16 flex flex-row">
      <nav
        className="flex w-1/3 px-6 text-white items-center whitespace-nowrap"
      >
        <NavItems
          classNames={"w-full justify-between gap-0"}
          {...{ pageTitle, setExpanded, setModalOpen }}
        />
        <div className="fixed right-4">
          <SocialLinks />
        </div>
      </nav>
    </header>
  );
};

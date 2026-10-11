import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

type NavItemType = {
  setExpanded: Dispatch<SetStateAction<boolean>>;
  title: string;
  to: string;
};

export const NavItem = ({ setExpanded, title, to }: NavItemType) => {
  const currPage = useLocation().pathname;
  return (
    <Link
      className={clsx(
        "inline-flex min-h-11 cursor-pointer items-center px-3 text-3xl tracking-[-0.02em] transition-colors duration-200 hover:text-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 min-[1301px]:text-2xl",
        currPage === to &&
          "hidden text-orange-200 underline underline-offset-4 sm:inline-flex"
      )}
      to={to}
      aria-current={currPage === to ? "page" : undefined}
      onClick={() => setExpanded(false)}
    >
      {title}
    </Link>
  );
};

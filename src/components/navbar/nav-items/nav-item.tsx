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
      className={clsx([
        "flex transition ease-in-out p-4 px-4 duration-150 hover:scale-110 hover:text-orange-200",
        `${
          currPage === to &&
          "text-orange-200 underline underline-offset-4 ease-in hidden sm:inline-block"
        }`,
      ])}
      to={to}
      aria-current="location"
      onClick={() => setExpanded(false)}
    >
      {title}
    </Link>
  );
};

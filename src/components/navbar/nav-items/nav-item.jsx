import { Link, useLocation } from "react-router-dom";

export const NavItem = ({ setExpanded, title, to }) => {
  let currPage = useLocation().hash;
  return (
    <Link
      className={`flex transition ease-in-out p-4 px-4 duration-150 hover:scale-110 hover:text-orange-200 ${
        currPage.includes(to) &&
        "text-orange-200 underline underline-offset-4 ease-in hidden sm:inline-block"
      }`}
      to={to}
      aria-current="page"
      onClick={() => setExpanded(false)}
    >
      {title}
    </Link>
  );
};

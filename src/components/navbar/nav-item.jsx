import { Link } from "react-router-dom";

export const NavItem = ({ setExpanded, pageTitle, title, to }) => {
  return (
    <Link
      className={`flex transition ease-in-out p-4 px-4 duration-150 hover:scale-110 hover:text-orange-200 ${
        pageTitle === (title || "/")
          ? "transition ease-in hidden sm:inline-block"
          : ""
      }`}
      to={to}
      aria-current="page"
      onClick={() => setExpanded(false)}
    >
      {title}
    </Link>
  );
};

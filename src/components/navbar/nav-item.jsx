import { Link } from "react-router-dom";

export const NavItem = ({ setExpanded, pageTitle, title, to, hidden }) => {
  return (
    <Link
      className={`nav-item ${pageTitle === title ? "nav-item-active" : ""} ${
        hidden && "hidden"
      }`}
      to={to}
      aria-current="page"
      onClick={() => setExpanded(false)}
    >
      {title}
    </Link>
  );
};

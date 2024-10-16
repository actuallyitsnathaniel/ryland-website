import { NavItem } from "./nav-item";

export const NavItems = ({
  classNames,
  setExpanded,
  pageTitle,
  setModalOpen,
}) => {
  return (
    <ul
      id="nav-bar"
      className={`flex text-3xl sm:justify-around ${
        !!classNames && classNames
      }`}
    >
      <NavItem title="home" to="/" {...{ pageTitle, setExpanded }} />
      <NavItem title="music" to="/music" {...{ pageTitle, setExpanded }} />
      <NavItem
        title="about us"
        to="/about-us"
        {...{ pageTitle, setExpanded }}
      />
      {/* <NavItem title="shows" to="/shows" {...{ pageTitle, setExpanded }} /> */}
      <NavItem
        title="gonna be fine"
        to="/gonnabefine"
        {...{ pageTitle, setExpanded }}
      />
      <button
        className={`flex transition ease-in-out p-4 px-4 duration-150
            hover:scale-110 hover:text-orange-200 cursor-pointer`}
        onClick={() => setModalOpen(true)}
      >
        contact
      </button>
    </ul>
  );
};

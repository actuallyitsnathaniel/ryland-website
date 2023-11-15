export const MobileNavHeader = (props) => {
  return (
    <div className="flex">
      <div
        className={`flex w-full pt-5 justify-center text-5xl whitespace-nowrap font-semibold`}
      >
        {props.pageTitle}
      </div>
      <button
        data-collapse-toggle="navbar"
        id="navbar-icon"
        type="button"
        className={`flex flex-col top-3 right-3 fixed mt-4 z-[1] select-none duration-200 -translate-x-2`}
        aria-controls="navbar"
        aria-expanded="false"
        onClick={() => {
          props.setExpanded(!props.expanded);
        }}
      >
        <span
          className={`flex w-12 h-1 mb-2.5 relative bg-white rounded-sm origin-top-left duration-200 ${
            props.expanded ? "rotate-45" : "rotate-0"
          }`}
        />
        <span
          className={`flex w-12 h-1 mb-2.5 relative bg-white rounded-sm origin-center duration-200 ${
            props.expanded
              ? "rotate-180 opacity-0 scale-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <span
          className={`flex w-12 h-1 mb-2.5 relative bg-white rounded-sm origin-bottom-left duration-200 ${
            props.expanded
              ? "-rotate-45 translate-y-[5px]"
              : "rotate-0 translate-y-0"
          }`}
        />
      </button>
    </div>
  );
};

import { Dispatch, SetStateAction } from "react";

type MobileNavHeaderType = {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  pageTitle: string;
};
export const MobileNavHeader = ({
  expanded,
  setExpanded,
  pageTitle,
}: MobileNavHeaderType) => {
  return (
    <div id="mobile-nav-header">
      <div
        className="flex justify-center px-16 pb-4 pt-6 text-balance text-3xl tracking-[-0.02em]"
      >
        {pageTitle}
      </div>
      <button
        data-collapse-toggle="navbar"
        id="navbar-icon"
        type="button"
        className="fixed right-3 top-3 z-[1] mt-4 inline-flex min-h-11 min-w-11 -translate-x-2 cursor-pointer select-none flex-col items-center justify-center duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
        aria-controls="navbar"
        aria-expanded={expanded}
        aria-label={expanded ? "Close menu" : "Open menu"}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <span
          className={`flex w-12 h-1 mb-2.5 relative bg-white rounded-sm origin-top-left duration-200 ${
            expanded ? "rotate-45" : "rotate-0"
          }`}
        />
        <span
          className={`flex w-12 h-1 mb-2.5 relative bg-white rounded-sm origin-center duration-200 ${
            expanded
              ? "rotate-180 opacity-0 scale-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <span
          className={`flex w-12 h-1 mb-2.5 relative bg-white rounded-sm origin-bottom-left duration-200 ${
            expanded ? "-rotate-45 translate-y-[5px]" : "rotate-0 translate-y-0"
          }`}
        />
      </button>
    </div>
  );
};

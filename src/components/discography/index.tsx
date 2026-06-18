import Disc, { DiscCategory } from "./disc";

import React, { useState, JSX } from "react";
import { motion } from "framer-motion";
import { itemVariants, containerVariants } from "../../util/transitionPage";

type Filter = DiscCategory | "all";

// Display order + plural labels for the filter pills.
const CATEGORIES: { key: DiscCategory; label: string }[] = [
  { key: "single", label: "Singles" },
  { key: "ep", label: "EPs" },
  { key: "album", label: "Albums" },
  { key: "feature", label: "Features" },
];

const Discography = ({ children }: { children: JSX.Element[] }) => {
  const [expanded, setExpanded] = useState(-1);
  const [filter, setFilter] = useState<Filter>("all");

  const all = React.Children.toArray(children) as JSX.Element[];

  // Counts per category, derived from the disc data.
  const counts = all.reduce<Record<string, number>>((acc, child) => {
    const c = child.props.category as DiscCategory | undefined;
    if (c) acc[c] = (acc[c] || 0) + 1;
    return acc;
  }, {});

  // Always show "All"; show a category pill only if it has releases (so
  // "Features" stays hidden until a release is tagged).
  const pills: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "All", count: all.length },
    ...CATEGORIES.filter((c) => counts[c.key]).map((c) => ({
      key: c.key as Filter,
      label: c.label,
      count: counts[c.key],
    })),
  ];

  const visible =
    filter === "all"
      ? all
      : all.filter((child) => child.props.category === filter);

  return (
    <div className="flex flex-col gap-10 py-3 md:px-28">
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {pills.map(({ key, label, count }) => {
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(key)}
              className={`cursor-pointer rounded-full border px-5 py-1.5 tracking-[-0.02em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 ${
                active
                  ? "border-yellow-600 bg-yellow-600 text-white"
                  : "border-white/30 text-white/80 hover:border-yellow-600/60 hover:text-white"
              }`}
            >
              {label} ({count})
            </button>
          );
        })}
      </div>

      <motion.div
        key={filter}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        aria-live="polite"
        className="flex flex-wrap w-full justify-center"
      >
        {visible.map((child, i) => (
          <motion.div key={child.key || i} variants={itemVariants}>
            {React.cloneElement(child, { expanded, setExpanded, i })}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

Discography.Disc = Disc;

export default Discography;

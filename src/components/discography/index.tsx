import Disc, { DiscCategory } from "./disc";

import React, { useState, JSX } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { itemVariants, containerVariants } from "../../util/transitionPage";
import { pillPrimary, pillSecondary } from "../../util/util";

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

  const reduceMotion = useReducedMotion();

  return (
    <div className="flex w-full flex-col gap-10 py-3 text-xl">
      <div className="flex flex-wrap justify-center gap-3">
        {pills.map(({ key, label, count }) => {
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(key)}
              className={active ? pillPrimary : pillSecondary}
            >
              {label} ({count})
            </button>
          );
        })}
      </div>

      <motion.div
        key={filter}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={reduceMotion ? undefined : containerVariants}
        aria-live="polite"
        className="flex w-full flex-wrap justify-center gap-8"
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

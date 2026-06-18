import { Variants } from "framer-motion";

// Custom easing curves (no default ease/linear)
export const EASE_EXPO_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_EXPO_IN_OUT = [0.87, 0, 0.13, 1] as const;

// Centralized animation variants to prevent conflicts
export const itemVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      duration: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: EASE_EXPO_OUT,
    },
  },
};

// Container variants for staggered animations
export const containerVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Page transition variants - FIXED: removed whileInView conflict
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    x: 15,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: EASE_EXPO_OUT,
    },
  },
  exit: {
    opacity: 0,
    x: -15,
    transition: {
      duration: 0.2,
      ease: EASE_EXPO_IN_OUT,
    },
  },
};

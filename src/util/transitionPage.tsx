import { motion } from "framer-motion";

// Centralized animation variants to prevent conflicts
export const itemVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 24,
      duration: 0.4 
    },
  },
  hidden: { 
    opacity: 0, 
    y: 20, 
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    } 
  },
};

// Container variants for staggered animations
export const containerVariants = {
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
export const pageVariants = {
  initial: {
    opacity: 0,
    x: 15,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -15,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const pageTransition = (OgComponent: JSX.ElementType) => {
  return () => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <OgComponent />
    </motion.div>
  );
};

export default pageTransition;

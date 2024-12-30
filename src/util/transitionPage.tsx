import { motion } from "framer-motion";

export const itemVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const pageTransition = (OgComponent: JSX.ElementType) => {
  return () => (
    <motion.div
      id="slide-in"
      initial={{ opacity: 0, translateX: 15 }}
      exit={{ opacity: 0, translateX: -15 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.2, delay: 0.07 }}
    >
      <OgComponent />
    </motion.div>
  );
};
export default pageTransition;

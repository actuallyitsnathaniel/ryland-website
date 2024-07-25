import { motion } from "framer-motion";

const pageTransition = (OgComponent) => {
  return () => (
    <motion.div
      id="slide-in"
      initial={{ opacity: 0, translateY: 20 }}
      exit={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.25, delay: 0.07 }}
    >
      <OgComponent />
    </motion.div>
  );
};
export default pageTransition;

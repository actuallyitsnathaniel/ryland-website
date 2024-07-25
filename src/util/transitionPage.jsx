import { motion } from "framer-motion";

const pageTransition = (OgComponent) => {
  return () => (
    <>
      <motion.div
        id="slide-in"
        initial={{ opacity: 0, translateY: 20 }}
        exit={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.25, delay: 0.07 }}
      >
        <OgComponent />
      </motion.div>
      {/* <motion.div
        id="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      /> */}
    </>
  );
};
export default pageTransition;

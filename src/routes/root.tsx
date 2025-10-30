import { useState, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import VideoBackground from "../components/video-background";
import NavBar from "../components/navbar";
import Modal from "../components/modal";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import grain from "../assets/images/textures/grain-optimized.jpeg";
import { pageVariants } from "../util/transitionPage";

// Lazy load route components for code splitting
const Home = lazy(() => import("./home"));
const AboutUs = lazy(() => import("./about-us"));
const Music = lazy(() => import("./music"));
const Links = lazy(() => import("./links"));
const Shows = lazy(() => import("./shows"));
const GonnaBeFine = lazy(() => import("./gonna-be-fine"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

const Root = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  return (
    <div
      id="root"
      className="text-white flex flex-col min-h-screen max-w-screen font-sans-helvetica-now"
    >
      <VideoBackground />
      <div
        className="fixed inset-0 pointer-events-none mix-blend-soft-light opacity-60 brightness-50 bg-repeat bg-cover z-[1]"
        style={{ backgroundImage: `url(${grain})` }}
      />
      <NavBar {...{ setModalOpen }} />
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingFallback />}>
          <Routes location={location} key={location.key}>
            <Route
              index
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/music"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Music />
                </motion.div>
              }
            />
            <Route
              path="/about-us"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <AboutUs />
                </motion.div>
              }
            />
            <Route
              path="/shows"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Shows />
                </motion.div>
              }
            />
            <Route
              path="/links"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Links />
                </motion.div>
              }
            />
            <Route
              path="/imgonnabefine"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <GonnaBeFine />
                </motion.div>
              }
            />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Modal {...{ isModalOpen, setModalOpen }}>
        <Newsletter />
      </Modal>
      <Footer />
    </div>
  );
};

export default Root;

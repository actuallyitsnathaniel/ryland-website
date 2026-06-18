import { useState, Suspense, lazy, ReactNode } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import VideoBackground from "../components/video-background";
import NavBar from "../components/navbar";
import Modal from "../components/modal";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import ErrorBoundary from "../components/error-boundary";
import grain from "../assets/images/textures/grain-optimized.jpeg";
import { pageVariants } from "../util/transitionPage";

// Lazy load route components for code splitting
const Home = lazy(() => import("./home"));
const AboutUs = lazy(() => import("./about-us"));
const Music = lazy(() => import("./music"));
const Links = lazy(() => import("./links"));
const Shows = lazy(() => import("./shows"));
const GonnaBeFine = lazy(() => import("./gonna-be-fine"));
const Press = lazy(() => import("./press"));
const Merch = lazy(() => import("./merch"));
const Drinks = lazy(() => import("./drinks"));
const Secret = lazy(() => import("./secret"));
const ErrorPage = lazy(() => import("./error"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

// Wrap each route in the shared page transition
const Page = ({ children }: { children: ReactNode }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
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
        className="fixed inset-0 pointer-events-none mix-blend-soft-light opacity-60 brightness-50 bg-repeat z-[1]"
        style={{ backgroundImage: `url(${grain})` }}
      />
      <NavBar {...{ setModalOpen }} />
      <AnimatePresence mode="wait">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Routes location={location} key={location.key}>
              <Route index element={<Page><Home /></Page>} />
              <Route path="/music" element={<Page><Music /></Page>} />
              <Route path="/about-us" element={<Page><AboutUs /></Page>} />
              <Route path="/shows" element={<Page><Shows /></Page>} />
              <Route path="/links" element={<Page><Links /></Page>} />
              <Route path="/imgonnabefine" element={<Page><GonnaBeFine /></Page>} />
              <Route path="/press" element={<Page><Press /></Page>} />
              <Route path="/merch" element={<Page><Merch /></Page>} />
              <Route path="/drinks" element={<Page><Drinks /></Page>} />
              <Route path="/secret" element={<Page><Secret /></Page>} />
              <Route path="*" element={<Page><ErrorPage /></Page>} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </AnimatePresence>
      <Modal {...{ isModalOpen, setModalOpen }}>
        <Newsletter />
      </Modal>
      <Footer />
    </div>
  );
};

export default Root;

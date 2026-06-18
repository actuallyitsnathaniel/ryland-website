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
const Merch = lazy(() => import("./merch"));
const Drinks = lazy(() => import("./drinks"));
const Secret = lazy(() => import("./secret"));
const ErrorPage = lazy(() => import("./error"));

// Loading fallback component
// Blank fallback — let the page (and its logo) draw in without a visible placeholder
const LoadingFallback = () => <div className="min-h-[50vh]" />;

// Wrap each route in the shared page transition.
// flex-1 fills the space between nav and footer; the inner m-auto centers
// content when it's shorter than that space and top-aligns + scrolls when taller
// (no top-clipping, unlike justify-center).
const Page = ({ children }: { children: ReactNode }) => (
  <motion.main
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="flex flex-1 flex-col w-full pt-20 md:pt-16"
  >
    <div className="m-auto w-full px-6 py-10">{children}</div>
  </motion.main>
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

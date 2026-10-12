import { useState, Suspense, lazy, ReactNode } from "react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import VideoBackground from "../components/video-background";
import NavBar from "../components/navbar";
import Modal from "../components/modal";
import Footer from "../components/footer";
import ErrorBoundary from "../components/error-boundary";
import grain from "../assets/images/textures/grain-optimized.webp";
import { pageVariants } from "../util/transitionPage";

// Lazy load route components for code splitting
const Home = lazy(() => import("./home"));
const TheBand = lazy(() => import("./the-band"));
const Music = lazy(() => import("./music"));
const Links = lazy(() => import("./links"));
const Shows = lazy(() => import("./shows"));
const GonnaBeFine = lazy(() => import("./gonna-be-fine"));
const Merch = lazy(() => import("./merch"));
const Drinks = lazy(() => import("./drinks"));
const Secret = lazy(() => import("./secret"));
const UsageAndAiPolicy = lazy(() => import("./usage-and-ai-policy"));
const ErrorPage = lazy(() => import("./error"));
const Newsletter = lazy(() => import("../components/newsletter"));

// Loading fallback component
// Blank fallback — let the page (and its logo) draw in without a visible placeholder
const LoadingFallback = () => <div className="min-h-[50vh]" />;

// Wrap each route in the shared page transition.
// flex-1 fills the space between nav and footer; the inner m-auto centers
// content when it's shorter than that space and top-aligns + scrolls when taller
// (no top-clipping, unlike justify-center).
const Page = ({ children }: { children: ReactNode }) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.main
      variants={reduceMotion ? undefined : pageVariants}
      initial={reduceMotion ? false : "initial"}
      animate={reduceMotion ? undefined : "animate"}
      exit={reduceMotion ? undefined : "exit"}
      className="flex flex-1 flex-col w-full pt-20 md:pt-16"
    >
      <div className="m-auto w-full px-6 py-10">{children}</div>
    </motion.main>
  );
};

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
      <div className="relative flex w-full flex-1 flex-col">
        <AnimatePresence mode="wait">
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Routes location={location} key={location.key}>
                <Route index element={<Page><Home /></Page>} />
                <Route path="/music" element={<Page><Music /></Page>} />
                <Route path="/the-band" element={<Page><TheBand /></Page>} />
                <Route path="/about-us" element={<Navigate to="/the-band" replace />} />
                <Route path="/shows" element={<Page><Shows /></Page>} />
                <Route path="/links" element={<Page><Links /></Page>} />
                <Route path="/imgonnabefine" element={<Page><GonnaBeFine /></Page>} />
                <Route path="/merch" element={<Page><Merch /></Page>} />
                <Route path="/drinks" element={<Page><Drinks /></Page>} />
                <Route path="/secret" element={<Page><Secret /></Page>} />
                <Route path="/usage-and-ai-policy" element={<Page><UsageAndAiPolicy /></Page>} />
                <Route path="*" element={<Page><ErrorPage /></Page>} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </AnimatePresence>
        {location.pathname === "/" && (
          <div className="pointer-events-none absolute inset-0 z-10 hidden md:flex md:flex-col md:items-end md:justify-end">
            <address className="pointer-events-auto sticky bottom-4 mr-6 text-right text-lg not-italic text-white/60">
              <p>Ryland, Los Angeles, CA</p>
              <a
                href="mailto:weareryland@gmail.com"
                className="inline-flex min-h-11 cursor-pointer items-center underline underline-offset-4 transition-colors duration-200 hover:text-white"
              >
                weareryland@gmail.com
              </a>
            </address>
          </div>
        )}
      </div>
      <Modal {...{ isModalOpen, setModalOpen }}>
        {isModalOpen && (
          <Suspense fallback={<p className="text-lg text-white/60">Loading…</p>}>
            <Newsletter />
          </Suspense>
        )}
      </Modal>
      <Footer />
    </div>
  );
};

export default Root;

import { useState, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import VideoBackground from "../components/video-background";
import NavBar from "../components/navbar";
import Modal from "../components/modal";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import grain from "../assets/images/textures/AdobeStock_grain.jpeg";

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
      style={{
        backgroundImage: `url(${grain})`,
        backgroundBlendMode: 'soft-light',
        filter: 'brightness(45%)'
      }}
    >
      <VideoBackground />
      <div className="fixed inset-0 pointer-events-none mix-blend-soft-light brightness-[45%] bg-repeat bg-cover" style={{ backgroundImage: `url(${grain})` }} />
      <NavBar {...{ setModalOpen }} />
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingFallback />}>
          <Routes location={location} key={location.key}>
            <Route index element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/links" element={<Links />} />
            <Route path="/imgonnabefine" element={<GonnaBeFine />} />
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

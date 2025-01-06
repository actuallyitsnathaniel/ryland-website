import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import VideoBackground from "../components/video-background";
import NavBar from "../components/navbar";
import Modal from "../components/modal";
import Footer from "../components/footer";
import grain from "../assets/images/textures/AdobeStock_grain.jpeg";

import Home from "./home";
import AboutUs from "./about-us";
import Music from "./music";
import Newsletter from "../components/newsletter";
import Links from "./links";
import Shows from "./shows";
import GonnaBeFine from "./gonna-be-fine";

const Root = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  return (
    <div
      id="root"
      className="text-white flex flex-col min-h-screen max-w-screen font-sans-helvetica-now"
    >
      <VideoBackground />
      <img
        src={grain}
        className="fixed mix-blend-soft-light brightness-[45%] bg-repeat w-full h-full object-cover pointer-events-none"
      />
      <NavBar {...{ setModalOpen }} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route index element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/links" element={<Links />} />
          <Route path="/imgonnabefine" element={<GonnaBeFine />} />
        </Routes>
      </AnimatePresence>
      <Modal {...{ isModalOpen, setModalOpen }}>
        <Newsletter />
      </Modal>
      <Footer />
    </div>
  );
};

export default Root;

import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import VideoBackground from "../components/video-background";
import NavBar from "../components/navbar";
import Modal from "../components/modal";
import Footer from "../components/footer";

import Home from "../routes/home";
import AboutUs from "../routes/about-us";
import Music from "../routes/music";
import Newsletter from "../components/newsletter";
import Links from "./links";
import { AnimatePresence } from "framer-motion";
import Shows from "./shows";
import GonnaBeFine from "./gonna-be-fine";

const Root = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  return (
    <div
      id="root"
      className="text-white flex flex-col min-h-screen max-w-screen font-sans-karla"
    >
      <VideoBackground />

      <NavBar {...{ setModalOpen }} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route index element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/links" element={<Links />} />
          <Route path="/gonnabefine" element={<GonnaBeFine />} />
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

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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

const Root = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation().hash.slice(1);

  return (
    <div
      id="root"
      className="flex flex-col min-h-screen max-w-screen duration-700 font-sans-karla"
    >
      <VideoBackground />
      <div className="transition-all duration-300 ease-in data-[close]:opacity-0">
        <NavBar {...{ setModalOpen }} />
        <AnimatePresence mode="sync">
          <Home location={location} key={0} />
          <Music location={location} key={1} />
          <AboutUs location={location} key={2} />
        </AnimatePresence>
      </div>
      <Modal {...{ isModalOpen, setModalOpen }}>
        <Newsletter />
      </Modal>
      <Footer />
    </div>
  );
};

export default Root;

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";

import VideoBackground from "../components/video-background";
import NavBar from "../components/navbar";
import Modal from "../components/modal";
import Footer from "../components/footer";

import Home from "../routes/home";
import AboutUs from "../routes/about-us";
import Music from "../routes/music";
import Newsletter from "../components/newsletter";
import Links from "./links";

const Root = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation().hash.slice(1);

  return (
    <div
      id="root"
      className="flex flex-col min-h-screen max-w-screen duration-700 font-sans-karla"
    >
      <VideoBackground />
      <Transition show={true} appear={true}>
        <div className="transition-all duration-300 ease-in data-[close]:opacity-0">
          <NavBar {...{ setModalOpen }} />
          {/* TODO: fix scroll due to navbar offset. needs to go to very top of DOCUMENT, not element */}
          <Home location={location} />
          <Music location={location} />
          <AboutUs location={location} />
        </div>
      </Transition>
      <Modal {...{ isModalOpen, setModalOpen }}>
        <Newsletter />
      </Modal>
      <Footer />
    </div>
  );
};

export default Root;

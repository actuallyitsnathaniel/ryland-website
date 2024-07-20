import { useState } from "react";
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
  return (
    <div
      id="root"
      className="flex flex-col min-h-screen max-w-screen duration-700 font-sans-karla"
    >
      <VideoBackground />
      <NavBar {...{ setModalOpen }} />
      {/* TODO: fix scroll due to navbar offset. needs to go to very top of DOCUMENT, not element */}
      <div className="grid grid-flow-col">
        <Home />
        <Music />
        <AboutUs />
        <Links />
      </div>
      <Modal {...{ isModalOpen, setModalOpen }}>
        <Newsletter />
      </Modal>
      <Footer />
    </div>
  );
};

export default Root;

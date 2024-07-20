import { useState } from "react";
import VideoBackground from "../components/video-background";
import NavBar from "../components/navbar";
import Modal from "../components/modal";
import Footer from "../components/footer";
import ScrollToHashElement from "../util/ScrollToHashElement";

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

      <ScrollToHashElement />
      <NavBar {...{ setModalOpen }} />
      {/* TODO: fix scroll due to navbar offset */}
      <div className="grid grid-flow-col overflow-scroll snap-x snap-mandatory">
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

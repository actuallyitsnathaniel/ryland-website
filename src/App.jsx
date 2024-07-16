import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import VideoBackground from "./components/video-background";
import NavBar from "./components/navbar";
import Modal from "./components/modal";
import Footer from "./components/footer";

import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Links from "./pages/links";
import Merch from "./pages/merch";
import Music from "./pages/music";
import Shows from "./pages/shows";
import Secret from "./pages/secret";
import ErrorPage from "./pages/error";
import Drinks from "./pages/drinks";
import Newsletter from "./components/newsletter";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="font-sans-josefin">
      <Router forceRefresh>
        <VideoBackground />
        <NavBar {...{ setModalOpen }} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/links" element={<Links />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/music" element={<Music />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/secret" element={<Secret />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Modal {...{ isModalOpen, setModalOpen }}>
          <Newsletter />
        </Modal>

        <Footer />
      </Router>
    </div>
  );
};

export default App;

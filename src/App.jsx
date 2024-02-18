import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import VideoBackground from "./components/video-background";
import { SocialLinks } from "./components/social-links";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Contact from "./pages/contact";
import AboutUs from "./pages/about-us";
import Links from "./pages/links";
import Merch from "./pages/merch";
import Music from "./pages/music";
import Shows from "./pages/shows";
import Secret from "./pages/secret";
import ErrorPage from "./pages/error";
import Drinks from "./pages/drinks";

const App = () => {
  return (
    <Router forceRefresh>
      <VideoBackground />
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/links" element={<Links />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/music" element={<Music />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <SocialLinks />
      <Footer />
    </Router>
  );
};

export default App;

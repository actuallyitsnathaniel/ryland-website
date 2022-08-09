import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import VideoBackground from "./components/video-background";
import { SocialLinks } from "./components/social-links";
import NavBar from "./components/navbar";

import Home from "./routes/home";
import Contact from "./routes/contact";
import AboutUs from "./routes/about-us";
import Merch from "./routes/merch";
import Shows from "./routes/shows";
import Footer from "./components/footer";

// matchMedia("(max-width: 600px)") ? true : false

function App() {
  return (
    <Router>
      <div className="justify-items-center text-center">
        <VideoBackground />

        <NavBar />

        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" render={Home} />
          <Route path="/about-us" render={AboutUs} />
          <Route path="/contact" render={Contact} />
          <Route path="/merch" render={Merch} />
          <Route path="/shows" render={Shows} />
        </Switch>
      </div>
      <SocialLinks />
      <Footer />
    </Router>
  );
}

export default App;

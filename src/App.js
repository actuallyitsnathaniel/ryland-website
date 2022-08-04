import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import VideoBackground from "./components/video-background";
import { SocialLinks } from "./components/social-links";

import Home from "./routes/home";
import Contact from "./routes/contact";
import AboutUs from "./routes/about-us";
import Merch from "./routes/merch";
import Shows from "./routes/shows";

function App() {
  return (
    <Router>
      <div className="App">
        <VideoBackground />

        <nav className="App-nav">
          <Link className="App-nav-item" to="/home">
            Home
          </Link>
          <Link className="App-nav-item" to="/about-us">
            About Us
          </Link>
          <Link className="App-nav-item" to="/contact">
            Contact
          </Link>
          <Link className="App-nav-item" to="/merch">
            Merch
          </Link>
          <Link className="App-nav-item" to="/shows">
            Shows
          </Link>
        </nav>
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
        <SocialLinks />
        <div className="App-footer">
          Copyright © Ryland, Nathaniel Bowman 2022
        </div>
      </div>
    </Router>
  );
}

export default App;

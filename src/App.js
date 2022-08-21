import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import VideoBackground from "./components/video-background";
import { SocialLinks } from "./components/social-links";
import NavBar from "./components/navbar";

import Home from "./pages/home";
import Contact from "./pages/contact";
import AboutUs from "./pages/about-us";
import Merch from "./pages/merch";
import Music from "./pages/music";
import Shows from "./pages/shows";
import Secret from "./pages/secret";
import ErrorPage from "./pages/error";

import Footer from "./components/footer";
import React from "react";

// matchMedia("(max-width: 600px)") ? true : false

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <VideoBackground />
        <div className="h-screen">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" render={Home} />
            <Route path="/about-us" render={AboutUs} />
            <Route path="/contact" render={Contact} />
            <Route path="/merch" render={Merch} />
            <Route path="/music" render={Music} />
            <Route path="/shows" render={Shows} />
            <Route path="/secret" render={Secret} />
            <Route path="*" render={ErrorPage} />
          </Switch>
          <SocialLinks />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

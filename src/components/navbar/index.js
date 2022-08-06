import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

function NavBar() {
  return (
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
  );
}

export default NavBar;

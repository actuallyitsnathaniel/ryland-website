import React from "react";
import { Link } from "react-router-dom";

import "./index.css";
import closeIcon from "../../assets/images/icons/navbar/close-icon.svg";

// this sucks rn. need to re-do a lot of this with better styling and some kind of state management.

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
      <img src={closeIcon} alt="close-icon" className="App-nav-close-icon" />
    </nav>
  );
}

export default NavBar;

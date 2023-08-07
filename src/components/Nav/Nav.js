import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css"
import overpricedLogo from "../../assets/overpricedlogo.png"

function Nav() {
  return (
    <div className="nav">
      <ul>
        <li className="nav-home">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/"><img src={overpricedLogo} alt="oplogo"/></Link>
        </li>
        <li className="nav-games">
          <Link to="/games">Games</Link>
        </li>
        <li className="nav-creategames">
          <Link to="/create-game">New Game</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

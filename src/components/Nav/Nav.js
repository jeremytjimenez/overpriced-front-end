import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/games">Games</Link>
      </p>
      <p>
        <Link to="/create-game">New Game</Link>
      </p>
    </div>
  );
}

export default Nav;
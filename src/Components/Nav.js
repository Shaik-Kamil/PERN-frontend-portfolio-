import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h3>
        <Link to="/games">Games</Link>
      </h3>
      <button>
        <Link to="/games/new">Add New Game</Link>
      </button>
    </nav>
  );
};

export default Nav;

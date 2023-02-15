import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="bg-blue-700 flex justify-between p-5 text-lg text-slate-100">
      <h2 className="font-signature ">
        <Link to="/">Home</Link>
      </h2>
      <h3 className="font-signature ">
        <Link to="/shaik">About Me</Link>
      </h3>
      <h3 className="font-signature ">
        <Link to="/games">Games</Link>
      </h3>
      <button className="font-signature ">
        <Link to="/games/new">Add New Game</Link>
      </button>
    </nav>
  );
};

export default Nav;

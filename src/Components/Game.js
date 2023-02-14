import React from 'react';
import { Link } from 'react-router-dom';

const Game = ({ game }) => {
  return (
    <div className=" ">
      <div>
        <Link to={`/games/${game.id}`}>
          <h2>{game.title}</h2>
        </Link>
        <img className="w-96 h-50" src={game.image} alt={game.title} />
      </div>
    </div>
  );
};

export default Game;

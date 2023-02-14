import React from 'react';
import { Link } from 'react-router-dom';

const Game = ({ game }) => {
  return (
    <div>
      <div>
        <Link to={`/games/${game.id}`}>
          <h1 className="text-2xl text-purple-900">{game.title}</h1>
        </Link>
        <Link to={`/games/${game.id}`}>
          <img className="w-96 h-72" src={game.image} alt={game.title} />
        </Link>
      </div>
    </div>
  );
};

export default Game;

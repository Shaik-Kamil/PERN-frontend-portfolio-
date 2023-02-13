import React from 'react';
import { Link } from 'react-router-dom';

const Game = ({ game }) => {
  return (
    <div>
      <Link to={`/games/${game.id}`}>
        <h2>{game.title}</h2>
      </Link>
      <img src={game.image} alt={game.title} />
    </div>
  );
};

export default Game;

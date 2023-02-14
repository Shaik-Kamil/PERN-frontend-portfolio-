import React, { useEffect, useState } from 'react';
import Game from './Game';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/games`)
      .then((res) => {
        setGames(res.data);
      })
      .catch((err) => {
        console.warn('catch', err);
      });
  }, []);
  return (
    <div className="flex flex-wrap gap-4 m-4">
      {games.map((game) => {
        return <Game key={game.id} game={game} />;
      })}
    </div>
  );
};

export default Games;

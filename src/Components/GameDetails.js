import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

const GameDetails = () => {
  const [game, setGame] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  const deleteGame = () => {
    axios
      .delete(`${API}/games]${id}`)
      .then(() => {
        navigate(`/games`);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    axios
      .get(`${API}/games/${id}`)
      .then((res) => {
        console.log(res.data);
        setGame(res.data);
      })
      .catch((err) => console.warn(err));
  }, [id]);
  return (
    <article>
      Title:{game.title}
      <img src={game.image} alt={game.title} />
      Genre: {game.genre}
      Release Date: {game.release_date}
      Rating: {game.ratings}
      Publisher: {game.publisher}
      <div>
        <Link to={`/games`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/games/${id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={deleteGame}>Delete</button>
      </div>
    </article>
  );
};

export default GameDetails;

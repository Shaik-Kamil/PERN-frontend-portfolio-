import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
const API = process.env.REACT_APP_API_URL;

const GameDetails = () => {
  const [game, setGame] = useState({});
  console.log(game);
  const { id } = useParams();
  let navigate = useNavigate();

  const deleteGame = () => {
    axios
      .delete(`${API}/games/${id}`)
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
    <article className="sm:flex gap-4 ">
      <img className="sm:w-96 max-w-sm" src={game.image} alt={game.title} />
      <div className="">
        <h3> Title: {game.title}</h3>
        <h4> Genre: {game.genre}</h4>
        <h4> Release Date: {game.release_date}</h4>

        <h4> Rating: {game.ratings}</h4>
        <h4>Publisher: {game.publisher}</h4>
        <h4>
          Favorite:{' '}
          {game.is_favorite ? (
            <MdOutlineFavorite color="red" size={55} />
          ) : (
            <MdOutlineFavoriteBorder color="red" size={55} />
          )}{' '}
        </h4>
        <div className="sm:flex mt-4">
          <div className="m-3">
            <Link to={`/games`}>
              <button className="bg-blue-700 hover:bg-blue-400 text-white py-2 px-4 rounded-md">
                Back
              </button>
            </Link>
          </div>
          <div className="m-3">
            <Link to={`/games/${id}/edit`}>
              <button className="bg-blue-700  hover:bg-blue-400 text-white py-2 px-5 rounded-md">
                Edit
              </button>
            </Link>
          </div>
          <div>
            <button
              className="bg-blue-700  hover:bg-blue-400 text-white p-2 m-3 rounded-md"
              onClick={deleteGame}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default GameDetails;

import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

const EditForm = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [game, setGame] = useState({
    title: '',
    genre: '',
    release_date: '',
    is_favorite: false,
    ratings: '',
    publisher: '',
    image: '',
  });
  const updateGame = (game) => {
    axios
      .put(`${API}/games/${id}`, game)
      .then(() => {
        navigate(`/games/${id}`);
      })
      .catch((c) => console.warn('catch', c));
  };
  const handleTextChange = (event) => {
    setGame({ ...game, [event.target.id]: event.target.value });
  };
  const handleCheckboxChange = () => {
    setGame({ ...game, is_favorite: !game.is_favorite });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateGame(game);
  };

  useEffect(() => {
    axios
      .get(`${API}/games/${id}`)
      .then((res) => {
        setGame(res.data);
      })
      .catch((error) => navigate(`/not-found`));
  }, [id]);
  return (
    <div className="flex m-auto w-2/5">
      <form className="bg-rose-200 p-10 rounded w-full" onSubmit={handleSubmit}>
        <label className="block font-bold mb-2" htmlFor="title">
          Title:
        </label>
        <input
          className="appearance-none rounded w-full py-2 px-3 leading-tight"
          id="title"
          type="text"
          value={game.title}
          onChange={handleTextChange}
          placeholder="Name of Game"
          required
        />
        <label className="block font-bold mb-2" htmlFor="genre">
          genre:
        </label>
        <input
          className="appearance-none rounded w-full py-2 px-3 leading-tight"
          id="genre"
          type="text"
          value={game.genre}
          onChange={handleTextChange}
        />
        <label className="block font-bold mb-2" htmlFor="release_date">
          release date:
        </label>
        <input
          className="appearance-none rounded w-full py-2 px-3 leading-tight"
          id="release_date"
          type="text"
          value={game.release_date}
          onChange={handleTextChange}
        />
        <div className="py-4">
          <label className="font-bold my-10" htmlFor="is_favorite">
            Favorite:
          </label>
          <input
            className="rounded"
            id="is_favorite"
            type="checkbox"
            value={game.is_favorite}
            onChange={handleCheckboxChange}
          />
        </div>
        <label className="block font-bold mb-2" htmlFor="ratings">
          Ratings:
        </label>
        <input
          className="appearance-none rounded w-full py-2 px-3 leading-tight"
          id="ratings"
          type="text"
          value={game.ratings}
          onChange={handleTextChange}
        />
        <label className="block font-bold mb-2" htmlFor="publisher">
          Publisher:
        </label>
        <input
          className="appearance-none rounded w-full py-2 px-3 leading-tight"
          id="publisher"
          type="text"
          value={game.publisher}
          onChange={handleTextChange}
        />
        <label className="block font-bold mb-2" htmlFor="url">
          Image:
        </label>
        <input
          className="appearance-none rounded w-full py-2 px-3 leading-tight"
          id="image"
          type="text"
          pattern="http[s]*://.+"
          value={game.image}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <br />
        <div className="flex justify-around">
          <input
            className="block bg-cyan-200 p-3 mt-3 rounded-md"
            type="submit"
          />
          <Link to={`/games/`}>
            <button className="block bg-cyan-200 p-3 mt-3 rounded-md">
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditForm;

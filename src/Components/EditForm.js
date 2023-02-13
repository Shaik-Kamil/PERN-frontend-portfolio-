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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={game.title}
          onChange={handleTextChange}
          placeholder="Name of Game"
          required
        />
        <label htmlFor="genre">genre:</label>
        <input
          id="genre"
          type="text"
          value={game.genre}
          onChange={handleTextChange}
        />
        <label htmlFor="release_date">release date:</label>
        <input
          id="release_date"
          type="text"
          value={game.release_date}
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          value={game.is_favorite}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="ratings">Ratings:</label>
        <input
          id="ratings"
          type="text"
          value={game.ratings}
          onChange={handleTextChange}
        />
        <label htmlFor="publisher">Publisher:</label>
        <input
          id="publisher"
          type="text"
          value={game.publisher}
          onChange={handleTextChange}
        />
        <label htmlFor="url">Image:</label>
        <input
          id="image"
          type="text"
          pattern="http[s]*://.+"
          value={game.image}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/games/`}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default EditForm;

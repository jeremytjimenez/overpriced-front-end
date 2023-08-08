import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGame } from "../Api/API";

function NewGame() {
  const [game, setGame] = useState({
    name: "",
    release_year: "",
    developer: "",
    original_price: "",
    market_price: "",
    genre: "",
    is_multiplayer: false,
    art: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  async function handleOnSubmit(event) {
    event.preventDefault();
    try {
      let response = await createGame({ ...game, is_multiplayer: isChecked });
      if (response.status === 200) {
      alert("Game Created");
      setGame({
        name: "",
        release_year: "",
        developer: "",
        original_price: "",
        market_price: "",
        genre: "",
        is_multiplayer: false,
        art: "",
      });
      navigate(`/games`);
    }
    } catch (error) {
      return error
    }
  }
  

  return (
    <div>
      <h2>Add new game</h2>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <div>
          <input
            placeholder="Name"
            type="text"
            id="name"
            value={game.name}
            onChange={(e) => setGame({ ...game, name: e.target.value })}
            required
          />
        </div>
        <label htmlFor="release_year">Release Year</label>
        <div>
          <input
            placeholder="Release Year"
            type="number"
            id="release_year"
            value={game.release_year}
            onChange={(e) => setGame({ ...game, release_year: e.target.value })}
            required
          />
        </div>
        <label htmlFor="developer">Developer</label>
        <div>
          <input
            placeholder="Developer"
            type="text"
            id="developer"
            value={game.developer}
            onChange={(e) => setGame({ ...game, developer: e.target.value })}
            required
          />
        </div>
        <label htmlFor="original_price">Original Price</label>
        <div>
          <input
            placeholder="Original Price"
            type="number"
            id="original_price"
            value={game.original_price}
            onChange={(e) =>
              setGame({ ...game, original_price: e.target.value })
            }
            required
          />
        </div>
        <label htmlFor="market_price">Market Price</label>
        <div>
          <input
            placeholder="Market Price"
            type="number"
            id="market_price"
            value={game.market_price}
            onChange={(e) => setGame({ ...game, market_price: e.target.value })}
            required
          />
        </div>
        <label htmlFor="art">Box Art Url</label>
        <div>
          <input
            placeholder="Box Art Url"
            type="text"
            id="art"
            value={game.art}
            onChange={(e) => setGame({ ...game, art: e.target.value })}
          />
        </div>
        <label htmlFor="genre">Genre</label>
        <div>
          <input
            placeholder="Genre"
            type="text"
            id="genre"
            value={game.genre}
            onChange={(e) => setGame({ ...game, genre: e.target.value })}
            required
          />
        </div>
        <label htmlFor="is_multiplayer">Favorite</label>
        <div>
          <input
            type="checkbox"
            id="is_multiplayer"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </div>
        <button>CREATE NEW GAME</button>
      </form>
    </div>
  );
}

export default NewGame;

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
  const [isChecked, setisChecked] = useState(false);
  const navigate = useNavigate();

  async function handleOnSubmit(event) {
    event.preventDefault();
    try {
      await createGame({ ...game, is_favorite: isChecked });
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
    } catch (error) {
      console.log(error);
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
        <label htmlFor="art">Url</label>
        <div>
          <input
            placeholder="Art"
            type="art"
            id="art"
            value={game.art}
            onChange={(e) => setGame({ ...game, art: e.target.value })}
            required
          />
        </div>
        <label htmlFor="genre">genre</label>
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
            onChange={(e) => setisChecked(e.target.checked)}
          />
        </div>
        <button>CREATE NEW GAME</button>
      </form>
    </div>
  );
}

export default NewGame;

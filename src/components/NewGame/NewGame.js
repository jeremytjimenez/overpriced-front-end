import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGame } from "../Api/API";

import "./NewGame.css";

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
      return error;
    }
  }

  return (
    <div className="create-game">
      <h2>Add new game</h2>
      <form className="create-game-form" onSubmit={handleOnSubmit}>
        <div className="create-name">
          <label htmlFor="name">Name</label>
          <br />
          <input
            placeholder="Name"
            type="text"
            id="name"
            value={game?.name}
            onChange={(e) => setGame({ ...game, name: e.target.value })}
            required
          />
        </div>

        <div className="create-releaseyear">
          <label htmlFor="release_year">Release Year</label>
          <br />
          <input
            placeholder="Release Year"
            type="number"
            id="release_year"
            value={game?.release_year}
            onChange={(e) => setGame({ ...game, release_year: e.target.value })}
            required
          />
        </div>

        <div className="create-developer">
          <label htmlFor="developer">Developer</label>
          <br />
          <input
            placeholder="Developer"
            type="text"
            id="developer"
            value={game?.developer}
            onChange={(e) => setGame({ ...game, developer: e.target.value })}
            required
          />
        </div>

        <div className="create-original-price">
          <label htmlFor="original_price">Original Price</label>
          <br />
          <input
            placeholder="Original Price"
            type="number"
            id="original_price"
            value={game?.original_price}
            onChange={(e) =>
              setGame({ ...game, original_price: e.target.value })
            }
            required
          />
        </div>

        <div className="create-market-price">
          <label htmlFor="market_price">Market Price</label>
          <br />
          <input
            placeholder="Market Price"
            type="number"
            id="market_price"
            value={game?.market_price}
            onChange={(e) => setGame({ ...game, market_price: e.target.value })}
            required
          />
        </div>

        <div className="create-art">
          <label htmlFor="art">Box Art Url</label>
          <br />
          <input
            placeholder="Box Art Url"
            type="text"
            id="art"
            value={game?.art}
            onChange={(e) => setGame({ ...game, art: e.target.value })}
          />
        </div>

        <div className="create-genre">
          <label htmlFor="genre">Genre</label>
          <br />
          <input
            placeholder="Genre"
            type="text"
            id="genre"
            value={game?.genre}
            onChange={(e) => setGame({ ...game, genre: e.target.value })}
            required
          />
        </div>

        <div className="create-is-multiplayer">
          <label htmlFor="is_multiplayer">Multiplayer</label>
          <br />
          <input
            type="checkbox"
            id="is_multiplayer"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </div>
        <button className="create-button">CREATE NEW GAME</button>
      </form>
    </div>
  );
}

export default NewGame;

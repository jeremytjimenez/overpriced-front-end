import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateGameById, getAllGames } from "../Api/API";

import "./EditGame.css"

function EditGame() {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await getAllGames();

        let findGame = result.data.findIndex((item) => {
          return item.id === Number(id);
        });
       const foundGame = result.data[findGame];
       setGame(foundGame);
       setIsChecked(foundGame.is_multiplayer);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  async function handleOnSubmit(event) {
    event.preventDefault();
    try {
      let response = await updateGameById(id, {
        ...game,
        is_multiplayer: isChecked,
      });
      if (response.status === 200) {
      alert("Updated Successfully");
      navigate(`/games/${id}`);
    }
    } catch (error) {
      return error;
    }
  }

  return (
    <div className="edit-game">
      <h2>Edit game</h2>
      <form className="edit-game-form" onSubmit={handleOnSubmit}>
        <div className="edit-name">
          <label htmlFor="name">Name</label>
          <br />
          <input
            placeholder="Name"
            type="text"
            id="name"
            value={game.name}
            onChange={(e) => setGame({ ...game, name: e.target.value })}
            required
          />
        </div>

        <div className="edit-releaseyear">
          <label htmlFor="release_year">Release Year</label>
          <br />
          <input
            placeholder="Release Year"
            type="number"
            id="release_year"
            value={game.release_year}
            onChange={(e) => setGame({ ...game, release_year: e.target.value })}
            required
          />
        </div>

        <div className="edit-developer">
          <label htmlFor="developer">Developer</label>
          <br />
          <input
            placeholder="Developer"
            type="text"
            id="developer"
            value={game.developer}
            onChange={(e) => setGame({ ...game, developer: e.target.value })}
            required
          />
        </div>

        <div className="edit-original-price">
          <label htmlFor="original_price">Original Price</label>
          <br />
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

        <div className="edit-market-price">
          <label htmlFor="market_price">Market Price</label>
          <br />
          <input
            placeholder="Market Price"
            type="number"
            id="market_price"
            value={game.market_price}
            onChange={(e) => setGame({ ...game, market_price: e.target.value })}
            required
          />
        </div>

        <div className="edit-art">
          <label htmlFor="art">Box Art Url</label>
          <br />
          <input
            placeholder="Box Art Url"
            type="text"
            id="art"
            value={game.art}
            onChange={(e) => setGame({ ...game, art: e.target.value })}
          />
        </div>

        <div className="edit-genre">
          <label htmlFor="genre">Genre</label>
          <br />
          <input
            placeholder="Genre"
            type="text"
            id="genre"
            value={game.genre}
            onChange={(e) => setGame({ ...game, genre: e.target.value })}
            required
          />
        </div>

        <div className="edit-is-multiplayer">
          <label htmlFor="is_multiplayer">Favorite</label>
          <br />
          <input
            type="checkbox"
            id="is_multiplayer"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </div>
        <button className="edit-button">EDIT GAME</button>
      </form>
    </div>
  );
}

export default EditGame;

import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllGames, handleDeleteById } from "../Api/API";

import "./Game.css"
import controller from '../../assets/playstation2controller.png'

function Game() {
  const [game, setGame] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
    try {
      let result = await getAllGames();

      let findGame = result.data.findIndex((item) => {
        return item.id === Number(id);
      });
      setGame(result.data[findGame]);
    } catch (error) {
      console.log(error);
    }
  };
    fetchData();
  }, [id]);

  async function handleDeleteSubmit(id) {
    try {
      let result = await handleDeleteById(id);
      if (result.status === 200) {
        navigate("/games");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="game">
      <section className="gameDetails">
        <img
          className="showGameImage"
          src={game?.art}
          alt="box art"
          onClick={() => navigate(`/games/${game.id}`)}
        />
        <div className="gameInfo">
          <p className="gameDetailsName">
            <strong>
              {game?.name} {`(${game?.release_year})`}
            </strong>
          </p>

          <p className="gameDeveloper"> Developer: {game?.developer}</p>
          <p className="gameGenre">{game?.genre}</p>
          <p className="gameOriginalPrice">
            Original Price: {game?.original_price}
          </p>
          <p className="gameMarketPrice">Market Price: {game?.market_price}</p>
          <p className="gameMultiplayer">
            Multiplayer? {game?.is_multiplayer ? "Yes" : "No"}
            <br />
            {game?.is_multiplayer ? null : (<img src={controller} alt="sad emoji"/>)}
            {game?.is_multiplayer && (<img src={controller} alt="controller"/>)}
            {game?.is_multiplayer && (<img src={controller} alt="controller"/>)}
          </p>

          <p
            className={
              game?.marketprice - game?.original_price <= 0 ? "$" : "$$$"
            }
          ></p>
          <br />
          <button
            className="gameEdit"
            onClick={() => {
              navigate(`/games/${id}/edit`);
            }}
          >
            Edit
          </button>
          <br />
          <button className="delete" onClick={() => handleDeleteSubmit(id)}>
            Delete
          </button>
        </div>
      </section>

      <button
        className="gameBack"
        onClick={() => {
          navigate("/games");
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default Game;

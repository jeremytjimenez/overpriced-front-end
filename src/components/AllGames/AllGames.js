import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllGames } from "../Api/API";

import "./AllGames.css";

function AllGames() {
  const [games, setGames] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await getAllGames();
      const sortedGames = result.data.sort((a, b) => a.name.localeCompare(b.name));
      setGames(sortedGames);
    } catch (error) {
      console.log(error);
    }
  }

  function calculateValue(gameInfo) {
    if (gameInfo.market_price / gameInfo.original_price > 5) {
      return "0px 0px 15px 5px gold";
    } else if (gameInfo.market_price / gameInfo.original_price > 3) {
      return "0px 0px 15px 5px green";
    } else if (gameInfo.market_price / gameInfo.original_price > 1) {
      return "0px 0px 15px 5px gray";
    } else {
      return "0px 0px 15px 5px red";
    }
  }

  return (
    <div className="all-games">
      <ul>
        {games.map((game) => {
          return (
            <li key={game.id}>
              <img
                src={game.art}
                alt="box art"
                style={{ "box-shadow": calculateValue(game) }}
                onClick={() => navigate(`/games/${game.id}`)}
              />
              <br />
              <h2 onClick={() => navigate(`/games/${game.id}`)}>{game.name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllGames;

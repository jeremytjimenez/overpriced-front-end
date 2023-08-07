import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllGames } from "../Api/API";

function AllGames() {
  const [games, setGames] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await getAllGames();

      setGames(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  function calculateValue(gameInfo) {
    if (gameInfo.market_price / gameInfo.original_price > 5) {
      return "0px 0px 15px gold";
    } else if (gameInfo.market_price / gameInfo.original_price > 3) {
      return "0px 0px 15px red";
    } else if (gameInfo.market_price / gameInfo.original_price > 1) {
      return "0px 0px 15px gray";
    } else {
      return "0px 0px 15px green";
    }
  }

  return (
    <div>
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

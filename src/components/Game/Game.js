import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllGames } from "../Api/API";

function Game() {
  const [game, setGame] = useState(null);

  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchData();
   
  }, [game]);

  async function fetchData() {
    try {
      let result = await getAllGames();

      let findGame = result.data.findIndex((item) => {
        return item.id === Number(id)
      })
      setGame(result.data[findGame])
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="game">

      <section className="gameDetails">

      <img className="showGameImage" src={game?.art} alt="box art" onClick={() => navigate(`/games/${game.id}`)} />

      <p className="gameDetailsName">
        <strong>{game?.name} {`(${game?.release_year})`}</strong>
      </p>

      <p className="gameDeveloper"> Developer: {game?.developer}</p>
      <p className="gameGenre">{game?.genre}</p>
      <p className="gameOriginalPrice">Original Price: {game?.original_price}</p>
      <p className="gameMarketPrice">Market Price: {game?.market_price}</p>
      <p className="gameMultiplayer">Multiplayer? {game?.multiplayer ? "Yes" : "No"}</p>

      <p className={(game?.marketprice - game?.original_price)<=0 ? "$" : "$$$"}></p>
    
      </section>

      <button className="gameBack" onClick={() => {navigate("/games");}}>
        Go back
      </button>
      <button className="gameEdit" onClick={() => {navigate(`/games/${id}/edit`);}}>
        Edit
      </button>
    </div>
  )
}

export default Game
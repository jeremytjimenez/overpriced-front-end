import Axios from "./Axios";


async function createGame(data) {
  try {
    let result = await Axios.post(`/games`, data);
    return result;
  } catch (error) {
    alert(error.response.data.error);
    return error;
  }
}

async function getAllGames() {
  try {
    let result = await Axios.get("/games");

    return result;
  } catch (e) {
    return e;
  }
};

export {createGame, getAllGames};


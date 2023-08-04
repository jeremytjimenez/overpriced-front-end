import Axios from "./Axios";

async function getAllGames() {
  try {
    let result = await Axios.get("/games");

    return result;
  } catch (e) {
    return e;
  }
};

export {
    getAllGames,
};
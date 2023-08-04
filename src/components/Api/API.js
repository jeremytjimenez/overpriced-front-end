import Axios from "./Axios";

async function createGame(data) {
  try {
    let result = await Axios.post(`/games`, data);
    return result;
  } catch (error) {
    return error;
  }
}

export {createGame};
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

export {createGame};
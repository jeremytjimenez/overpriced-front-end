import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AllGames from "./components/AllGames/AllGames";
import Game from "./components/Game/Game";
import Nav from "./components/Nav/Nav";
import NewGame from "./components/NewGame/NewGame";
import EditGame from "./components/EditGame/EditGame";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<AllGames />} />
          <Route path="/games/create-game" element={<NewGame />} />
          <Route path="/games/:id" element={<Game />} />
          <Route path="/games/:id/edit" element={<EditGame />} />
          <Route path="/404" element={<h1>404 Not found!</h1>} />
          <Route path="*" element={<h1>404 Not found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

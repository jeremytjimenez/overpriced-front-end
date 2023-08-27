import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./components/common/Spinner/Spinner";
import "./App.css";
import React from "react";
const Home = React.lazy(() => import("./components/Home/Home"));
const AllGames = React.lazy(() => import("./components/AllGames/AllGames"));
const Game = React.lazy(() => import("./components/Game/Game"));
const Nav = React.lazy(() => import("./components/Nav/Nav"));
const NewGame = React.lazy(() => import("./components/NewGame/NewGame"));
const EditGame = React.lazy(() => import("./components/EditGame/EditGame"));
const Info = React.lazy(() => import("./components/Info/Info"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Spinner />}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />}/>
          <Route path="/games" element={<AllGames />} />
          <Route path="/games/create-game" element={<NewGame />} />
          <Route path="/games/:id" element={<Game />} />
          <Route path="/games/:id/edit" element={<EditGame />} />
          <Route path="/404" element={<h1>404 Not found!</h1>} />
          <Route path="*" element={<h1>404 Not found!</h1>} />
        </Routes>
      </Router>
      </React.Suspense>
    </div>
  );
}

export default App;

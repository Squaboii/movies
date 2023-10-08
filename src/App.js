import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import LeNav from "./components/LeNav";
import { useState } from "react";
import { Data } from "./Data";

function App() {
  const [searcH, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [addmovie, setaddmovie] = useState(Data);
  console.log(addmovie);
  return (
    <div className="App">
      <LeNav
        setSearch={setSearch}
        setRating={setRating}
        setaddmovie={setaddmovie}
        addmovie={addmovie}
      />
      <MovieList search={searcH} rate={rating} addmovie={addmovie} />
    </div>
  );
}

export default App;

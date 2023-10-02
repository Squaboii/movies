import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import LeNav from "./components/LeNav";

function App() {
  return (
    <div className="App">
      <LeNav />
      <div className="List">
        <MovieList />
      </div>
    </div>
  );
}

export default App;

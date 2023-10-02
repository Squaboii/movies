import React from "react";
import MovieItems from "./MovieItems";
import { Data } from "../Data";
import "./comp.css";

function MovieList() {
  return (
    <div>
      <div className="align">
        {Data.map((elt) => {
          return (
            <MovieItems
              a={elt.image}
              b={elt.title}
              c={elt.rating}
              d={elt.actors}
              e={elt.desc}
              f={elt.time}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;

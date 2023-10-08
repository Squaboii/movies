import React from "react";
import MovieItems from "./MovieItems";

import "./comp.css";

function MovieList(props) {
  return (
    <div>
      <div className="align">
        {props.addmovie
          .filter((movie) => {
            return movie.title
              .toLowerCase()
              .includes(props.search.toLowerCase());
          })
          .filter((movie) => {
            return props.rate ? movie.rating === props.rate : movie;
          })
          .map((elt) => {
            return (
              <div key={elt.image} className="Text">
                <MovieItems
                  a={elt.image}
                  b={elt.title}
                  c={elt.rating}
                  d={elt.actors}
                  e={elt.desc}
                  f={elt.time}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MovieList;

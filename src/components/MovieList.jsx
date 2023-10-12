import React from "react";
import MovieItems from "./MovieItems";

import "./comp.css";
import { Button } from "react-bootstrap";

function MovieList(props) {
  return (
    <div className="bigapp">
      <div className="butttons">
        <button className="learn-more">Action </button>
        <button className="learn-more">Scary </button>
        <button className="learn-more">funny </button>
        <button className="learn-more">Horror </button>
        <button className="learn-more">Mystery</button>
        <button className="learn-more">Magic </button>
        <button className="learn-more">Romance</button>
        <button className="learn-more">GORE</button>
        <button className="learn-more" onClick={() => {}}>
          Scary{" "}
        </button>
      </div>
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
              <div>
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
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MovieList;

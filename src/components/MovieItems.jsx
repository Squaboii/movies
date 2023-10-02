import React from "react";

function MovieItems(props) {
  return (
    <div>
      <img src={props.a} width={500} height={700} />
      <h1>{props.b}</h1>
      <h3>{props.c}</h3>
      <h3>{props.d}</h3>
      <h3>{props.e}</h3>
      <h3>{props.f}</h3>
    </div>
  );
}

export default MovieItems;

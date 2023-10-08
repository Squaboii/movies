import React from "react";
import "./comp.css";
import ReactStars from "react-rating-stars-component";
function MovieItems(props) {
  console.log(props.c);
  return (
    <div className="texxt">
      <img src={props.a} width={300} height={500} />
      <div>
        <h1 style={{ textAlign: "center" }}>{props.b}</h1>
        <div className="center">
          <ReactStars
            count={10}
            value={props.c}
            size={24}
            color="grey"
            activeColor="#000000"
            edit={false}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieItems;

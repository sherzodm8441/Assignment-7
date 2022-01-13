import React from "react";

export default function Gifcard(props) {
  return (
    <div className="gifcard-container">
      <img src={props.img} />
      <br />
      <h2 className="gif-title">{props.title || "Title Unknown"}</h2>
      <a className="gif-source" href={props.url}>
        source
      </a>
    </div>
  );
}

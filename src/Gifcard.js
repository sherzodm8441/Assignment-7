import React from "react";

export default function Gifcard(props) {
  return (
    <div className="gifcard-container">
      <img src={props.img} alt=""/>
      <br />
      <div className="gif-title">{props.title || "Title Unknown"}</div>
      <a className="gif-source" href={props.url}>
        source
      </a>
    </div>
  );
}

import React from "react";

export default function SearchField(props) {
  return (
    <input className="search-bar" value={props.value} onChange={props.handleChange} type="text" />
  );
}

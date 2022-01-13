import React from "react";

export default function SearchField(props) {
  return (
    <div>
      <input value={props.value} onChange={props.handleChange} type="text" />
      {props.value}
    </div>
  );
}

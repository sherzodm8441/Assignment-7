import React, { useEffect, useState } from "react";
import "./styles/Gifcard.css";

export default function Gifcard(props) {
  const [gif, setGif] = useState({
    title: "title",
    url: "url",
    img: "gif",
  });

  useEffect(() => {
    fetch("http://api.giphy.com/v1/gifs/random?api_key=aZFV2oHSbfWwZMoBp512mh5Z7ZY9I7Ni")
      .then((res) => res.json())
      .then((gifData) => extractData(gifData.data));
  }, []);

  function extractData(gifData) {
    console.log(gifData);
    setGif({
      title: gifData.title || "Title Unknown",
      url: gifData.url,
      img: gifData.images.fixed_height.url,
    });
  }

  return (
    <div className="gifcard-container">
      <img className="gif" src={gif.img} />
      <br/>
      <a className="gif-source" href={gif.url}>
        source
      </a>
    </div>
  );
}

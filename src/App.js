import React from "react";
import Gifcard from "./Gifcard";
import "./App.css";

function App() {
  const apiKey = "aZFV2oHSbfWwZMoBp512mh5Z7ZY9I7Ni";

  const urlTrending = "http://api.giphy.com/v1/gifs/trending?api_key=" + apiKey;
  const urlRandom = "http://api.giphy.com/v1/gifs/random?api_key=" + apiKey;

  const [dataTrending, setDataTrending] = React.useState([]);
  const [dataRandom, setDataRandom] = React.useState();
  const [called, setCalled] = React.useState(0);

  React.useEffect(() => {
    fetch(urlTrending)
      .then((res) => res.json())
      .then((data) => setDataTrending(data.data))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    fetch(urlRandom)
      .then((res) => res.json())
      .then((data) => setDataRandom(data.data))
      .catch((error) => console.log(error));
  }, [called]);

  function changeCalled() {
    setCalled((prevState) => prevState + 1);
  }

  function returnRandom() {
    return (
      <Gifcard img={dataRandom.images.original.url} url={dataRandom.url} title={dataRandom.title} />
    );
  }
  const result = dataTrending.map((gif) => (
    <Gifcard img={gif.images.original.url} url={gif.url} title={gif.title} />
  ));
  //const randomGif = <img src={dataRandom["images"]["original"]["url"]} alt=""/>

  return (
    <div className="App">
      <button onClick={changeCalled}>Random Gif</button>
      {called > 0 && returnRandom()}
      <h1>Trending</h1>
      {result}
    </div>
  );
}

export default App;

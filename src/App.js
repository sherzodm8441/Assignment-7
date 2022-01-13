import React from "react";
import Gifcard from "./Gifcard";
import SearchField from "./SearchField";
import "./App.css";

function App() {
  const [inputVal, setInputVal] = React.useState("");
  const [searchedGifs, setSearchedGifs] = React.useState([]);

  const [trendingGifs, setTrendingGifs] = React.useState([]);
  const [randomGif, setRandomGif] = React.useState();
  const [called, setCalled] = React.useState(0);

  const apiKey = "aZFV2oHSbfWwZMoBp512mh5Z7ZY9I7Ni";

  const urlSearch = `http://api.giphy.com/v1/gifs/search?q=${inputVal}&api_key=${apiKey}`;
  const urlTrending = "http://api.giphy.com/v1/gifs/trending?api_key=" + apiKey;
  const urlRandom = "http://api.giphy.com/v1/gifs/random?api_key=" + apiKey;

  React.useEffect(() => {
    fetch(urlTrending)
      .then((res) => res.json())
      .then((data) => setTrendingGifs(data.data))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    fetch(urlRandom)
      .then((res) => res.json())
      .then((data) => setRandomGif(data.data))
      .catch((error) => console.log(error));
  }, [called]);

  React.useEffect(() => {
    fetch(urlSearch)
      .then((res) => res.json())
      .then((data) => setSearchedGifs(data.data))
      .catch((error) => console.log(error));
  }, [inputVal]);

  // handler for random gif button
  function changeCalled() {
    setCalled((prevState) => prevState + 1);
  }

  // handler for searchbar
  function updateSearch(event) {
    setInputVal(event.target.value);
  }

  function returnRandom() {
    return (
      <Gifcard img={randomGif.images.original.url} url={randomGif.url} title={randomGif.title} />
    );
  }

  const searchResults = searchedGifs.map((gif) => (
    <Gifcard img={gif.images.original.url} url={gif.url} title={gif.title} />
  ));

  const result = trendingGifs.map((gif) => (
    <Gifcard img={gif.images.original.url} url={gif.url} title={gif.title} />
  ));
  //const randomGif = <img src={randomGif["images"]["original"]["url"]} alt=""/>

  return (
    <div className="App">
      <div className="header">
        <h2>Search for a GIF</h2>
        <SearchField value={inputVal} handleChange={updateSearch} />
        <button className="random-btn" onClick={changeCalled}>
          Random Gif
        </button>
        {called > 0 && returnRandom()}
      </div>
      {!inputVal && <h1>Trending</h1>}
      <div className="results-container">{inputVal ? searchResults : result}</div>
    </div>
  );
}

export default App;

import React from "react";
import Gifcard from "./Gifcard";
import SearchField from "./SearchField";
import "./App.css";

function App() {
  const apiKey = "aZFV2oHSbfWwZMoBp512mh5Z7ZY9I7Ni";

  const urlSearch = `http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=${apiKey}`;
  const urlTrending = "http://api.giphy.com/v1/gifs/trending?api_key=" + apiKey;
  const urlRandom = "http://api.giphy.com/v1/gifs/random?api_key=" + apiKey;

  const [dataSearch, setDataSearch] = React.useState("");
  const [gifSearch, setGifSearch] = React.useState();
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

  React.useEffect(() => {
    fetch(urlSearch)
      .then((res) => res.json())
      .then((data) => setGifSearch(data.data))
      .catch((error) => console.log(error));
  }, [dataSearch]);

  function changeCalled() {
    setCalled((prevState) => prevState + 1);
  }

  function updateSearch(event) {
    setDataSearch(event.target.value);
  }

  function returnRandom() {
    return (
      <Gifcard img={dataRandom.images.original.url} url={dataRandom.url} title={dataRandom.title} />
    );
  }

  /* TODO */
  function returnSearched() {
    return (
      <Gifcard img={gifSearch.images.original.url} url={gifSearch.url} title={gifSearch.title} />
    );
  }


  const result = dataTrending.map((gif) => (
    <Gifcard img={gif.images.original.url} url={gif.url} title={gif.title} />
  ));
  //const randomGif = <img src={dataRandom["images"]["original"]["url"]} alt=""/>

  return (
    <div className="App">
      <SearchField value={dataSearch} handleChange={updateSearch} />
      <button onClick={changeCalled}>Random Gif</button>
      {called > 0 && returnRandom()}
      <h1>Trending</h1>
      {result}
    </div>
  );
}

export default App;

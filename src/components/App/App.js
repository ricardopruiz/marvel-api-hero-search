import "./App.css";
import { apiSearchSuperHero } from "../../services/serviceApiMarvel";
import React, { useState } from "react";
import { SuperHeroSearch } from "../SuperHeroSearch/SuperHeroSearch";
import { SuperHeroesList } from "../SuperHeroesList/SuperHeroesList";

function App() {
  const [heroSearched, setHeroSearched] = useState("");
  const [results, setResults] = useState([]);

  const callApi = () =>
    apiSearchSuperHero(heroSearched).then((data) => {
      setResults(data);
    });

  return (
    <div className="App">
      <div className="container">
        <h1>SuperHero Finder</h1>
        <SuperHeroSearch
          heroSearched={heroSearched}
          onInput={({ target }) => setHeroSearched(target.value)}
          onSearch={callApi}
        />
        <SuperHeroesList heroList={results} />
      </div>
    </div>
  );
}

export default App;

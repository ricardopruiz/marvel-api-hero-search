import { apiSearchSuperHero } from "../../services/serviceApiMarvel";
import React, { useState } from "react";

import { StyledApp } from "./App.styled";

import { SuperHeroTitle } from "../SuperHeroTitle";
import { SuperHeroSearch } from "../SuperHeroSearch";
import { SuperHeroesList } from "../SuperHeroesList";
import { SuperHeroStatistics } from "../SuperHeroStatistics";

function App() {
  const [heroSearched, setHeroSearched] = useState("");
  const [fetchingData, setFetchingData] = useState(false);
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [results, setResults] = useState([]);

  const callApi = () => {
    setIsApiCalled(true);
    setFetchingData(true);
    apiSearchSuperHero(heroSearched)
      .then((data) => {
        setResults(data);
      })
      .finally(() => setFetchingData(false));
  };

  return (
    <StyledApp>
      <SuperHeroTitle title="Marvel's SuperHeroes Finder" />
      <SuperHeroSearch
        heroSearched={heroSearched}
        onInput={({ target }) => setHeroSearched(target.value)}
        onSearch={callApi}
        loading={fetchingData}
      />
      {(!fetchingData && isApiCalled) && <SuperHeroStatistics numberOfResults={results.length} />}
      <SuperHeroesList heroList={results} />
    </StyledApp>
  );
}

export default App;

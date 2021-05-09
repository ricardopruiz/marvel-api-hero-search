import { apiSearchSuperHero } from "../../services/serviceApiMarvel";
import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";
import { StyledApp } from "./App.styled";
import { standardMode, darkMode } from "../../themes/themes";

import SuperHeroTitle from "../SuperHeroTitle";
import { SuperHeroSearch } from "../SuperHeroSearch";
import { SuperHeroesList } from "../SuperHeroesList";
import { SuperHeroStatistics } from "../SuperHeroStatistics";
import SuperHeroThemeSelector from "../SuperHeroThemeSelector";

function App() {
  const [heroSearched, setHeroSearched] = useState("");
  const [fetchingData, setFetchingData] = useState(false);
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [results, setResults] = useState([]);
  const [numberOfColumns, setNumberOfColumns] = useState(0);
  const [darkModeEnabled, setdarkModeEnabled] = useState(false);

  const setNewColumns = () => {
    setNumberOfColumns(Math.floor(window.innerWidth / 215));
  };

  useEffect(() => {
    setNewColumns();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setNewColumns);
    return () => {
      window.removeEventListener("resize", setNewColumns);
    };
  }, []);

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
    <ThemeProvider theme={darkModeEnabled ? darkMode : standardMode}>
      <StyledApp>
        <SuperHeroTitle>
          <div>MARVEL SUPERHEROES</div>
          <div>FINDER</div>
        </SuperHeroTitle>
        <SuperHeroThemeSelector isEnabled={darkModeEnabled} onChecked={setdarkModeEnabled}/>
        <SuperHeroSearch
          heroSearched={heroSearched}
          onInput={({ target }) => setHeroSearched(target.value)}
          onSearch={callApi}
          loading={fetchingData}
        />
        <SuperHeroStatistics
          showStatictics={!fetchingData && isApiCalled}
          numberOfResults={results.length}
        />
        <SuperHeroesList heroList={results} numberOfColumns={numberOfColumns} />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

import React from "react";

export const SuperHeroSearch = ({ heroSearched, onInput, onSearch }) => {
  return (
    <div>
      <input type="text" value={heroSearched} onInput={onInput} />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

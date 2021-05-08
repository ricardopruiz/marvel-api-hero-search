import React from "react";
import { StyledSuperHeroesList } from "./SuperHeroesList.styled";
import { SuperHeroListItem } from "../SuperHeroListItem/SuperHeroListItem";

export const SuperHeroesList = ({ heroList }) => {
  return (
    <StyledSuperHeroesList>
      {heroList.map((hero, index) => (
        <SuperHeroListItem key={index} hero={hero} />
      ))}
    </StyledSuperHeroesList>
  );
};

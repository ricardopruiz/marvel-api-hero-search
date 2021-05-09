import React from "react";
import { StyledSuperHeroesList } from "./SuperHeroesList.styled";
import { SuperHeroListItem } from "../SuperHeroListItem";

import PropTypes from "prop-types";

export const SuperHeroesList = ({ heroList, numberOfColumns }) => {
  return (
    <StyledSuperHeroesList numberOfColumns={numberOfColumns}>
      {heroList.map((hero) => (
        <SuperHeroListItem key={hero.id} hero={hero} />
      ))}
    </StyledSuperHeroesList>
  );
};

SuperHeroesList.propTypes = {
  heroList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

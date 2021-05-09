import React from "react";
import { StyledSuperHeroesList } from "./SuperHeroesList.styled";
import { SuperHeroListItem } from "../SuperHeroListItem";

import PropTypes from "prop-types";

export const SuperHeroesList = ({ heroList }) => {
  return (
    <StyledSuperHeroesList>
      {heroList.map((hero, index) => (
        <SuperHeroListItem key={`${Date.now()}-${index}`} hero={hero} />
      ))}
    </StyledSuperHeroesList>
  );
};

SuperHeroesList.propTypes = {
  heroList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

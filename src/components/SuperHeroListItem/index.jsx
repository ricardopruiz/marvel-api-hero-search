import React from "react";

import PropTypes from "prop-types";

import {
  StyledSuperHeroListItem,
  StyledHeroName,
  StyledHeroDesc,
} from "./SuperHeroListItem.styled";

export const SuperHeroListItem = ({ hero }) => {
  const imgSize = "portrait_incredible";
  const imgURL = `${hero.thumbnail.path}/${imgSize}.${hero.thumbnail.extension}`;

  return (
    <StyledSuperHeroListItem>
      <img src={imgURL} alt="img not available" />
      <div>
        <StyledHeroName>{hero.name}</StyledHeroName>
        <StyledHeroDesc>{hero.description}</StyledHeroDesc>
      </div>
    </StyledSuperHeroListItem>
  );
};


SuperHeroListItem.propTypes = {
  hero: PropTypes.object.isRequired
}
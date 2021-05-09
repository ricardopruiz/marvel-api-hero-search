import React from "react";
import PropTypes from "prop-types";

import { StyledStatistics } from "./SuperHeroStatistics.styled";

export const SuperHeroStatistics = ({ showStatictics, numberOfResults }) => {
  const isPlural = numberOfResults !== 1;
  return (
    <StyledStatistics>
      {showStatictics &&
        `${numberOfResults} result${isPlural ? "s" : ""} found`}
    </StyledStatistics>
  );
};

SuperHeroStatistics.propTypes = {
  numberOfResults: PropTypes.number.isRequired,
  showStatictics: PropTypes.bool.isRequired,
};

SuperHeroStatistics.defaultProps = {
  numberOfResults: 0,
  showStatictics: false,
};

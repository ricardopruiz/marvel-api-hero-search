import React from "react";
import PropTypes from "prop-types";

export const SuperHeroStatistics = ({ numberOfResults }) => {
  const isPlural = numberOfResults !== 1;
  return <div>{`${numberOfResults} result${isPlural ? "s" : ""} found`}</div>;
};

SuperHeroStatistics.propTypes = {
  numberOfResults: PropTypes.number.isRequired,
};

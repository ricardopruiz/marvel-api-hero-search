import React from "react";
import PropTypes from "prop-types";

import { AppBackgroundTitle, AppTitle } from "./SuperHeroTitle.styled";

export const SuperHeroTitle = ({ title }) => {
  return (
    <AppBackgroundTitle>
      <AppTitle>{title}</AppTitle>
    </AppBackgroundTitle>
  );
};

SuperHeroTitle.propTypes = {
  title: PropTypes.string,
};

SuperHeroTitle.defaultProps = {
  title: "",
};

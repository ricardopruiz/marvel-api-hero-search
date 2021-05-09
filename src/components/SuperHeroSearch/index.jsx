import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { StyledSpiner, StyledSearchBar } from "./SuperHeroSearch.styled";

export const SuperHeroSearch = ({
  heroSearched,
  onInput,
  onSearch,
  loading,
}) => {
  return (
    <StyledSearchBar>
      <input type="text" value={heroSearched} onInput={onInput} />
      <button disabled={heroSearched.length === 0} onClick={onSearch}>
        {loading ? (
          <StyledSpiner>
            <FontAwesomeIcon icon={faSpinner} />
          </StyledSpiner>
        ) : (
          "Search"
        )}
      </button>
    </StyledSearchBar>
  );
};

SuperHeroSearch.propTypes = {
  heroSearched: PropTypes.string,
  onInput: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

SuperHeroSearch.defaultProps = {
  heroSearched: "",
  loading: false,
};

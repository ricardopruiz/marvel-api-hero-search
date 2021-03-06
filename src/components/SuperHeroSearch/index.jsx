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
  const pressedButton = ({ key }) => {
    if (key === "Enter") {
      onSearch();
    }
  };

  return (
    <StyledSearchBar>
      <input
        type="text"
        value={heroSearched}
        onInput={onInput}
        onKeyPress={pressedButton}
      />
      <button disabled={!heroSearched.length} onClick={onSearch}>
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

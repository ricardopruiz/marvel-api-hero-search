import React from "react";

import StyledCheckbox from "./SuperHeroThemeSelector.styled";

const SuperHeroThemeSelector = ({ isEnabled, onChecked }) => {
  const setDarkMode = ({ target }) => {
    onChecked(target.checked);
  };

  return (
    <StyledCheckbox>
      <div>Enable Dark Mode</div>
      <input type="checkbox" onChange={setDarkMode} value={isEnabled} />
    </StyledCheckbox>
  );
};

export default SuperHeroThemeSelector;

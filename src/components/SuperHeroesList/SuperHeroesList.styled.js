import styled from "styled-components";

export const StyledSuperHeroesList = styled.div`
  justify-content: center;

  column-count: ${Math.floor(window.innerWidth / 202)};
`;

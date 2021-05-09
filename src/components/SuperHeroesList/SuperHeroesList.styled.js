import styled from "styled-components";

export const StyledSuperHeroesList = styled.div`
  justify-content: center;
  column-count: ${props => props.numberOfColumns};
`;

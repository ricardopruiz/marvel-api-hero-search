import styled from "styled-components";

export const StyledSuperHeroListItem = styled.div`
  display: block;
  border: 1px solid gray;
  border-radius: 10px;
  width: 200px;
  overflow: hidden;
  margin: 15px;
  box-shadow: 10px 10px 64px -38px rgba(0, 0, 0, 0.75);
  background-color: white;

  &:hover {
    box-shadow: 10px 10px 64px -38px rgba(0, 0, 0, 20);
    transform: scale(1.1);
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

export const StyledHeroName = styled.div`
  font-weight: bolder;
  font-size: 1.3rem;
  text-align: center;
  padding: 10px;
`;

export const StyledHeroDesc = styled.div`
  text-align: left;
  padding: 0 10px 15px 10px;
`;

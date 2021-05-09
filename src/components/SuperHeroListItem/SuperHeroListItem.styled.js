import styled from "styled-components";

export const StyledSuperHeroListItem = styled.div`
  display: block;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  width: 200px;
  overflow: hidden;
  margin: 0 15px 15px 0;
  background-color: ${({ theme }) => theme.heroCard};

  break-inside: avoid;
  page-break-inside: avoid;
  filter: sepia(70%);
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: none;
    background-color: white;
    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    
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

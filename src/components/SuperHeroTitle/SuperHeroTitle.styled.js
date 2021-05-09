import styled from "styled-components";

export const AppTitle = styled.div`
  @font-face {
    font-family: title-hero;
    src: local("My Title"),
      url('assets/fonts/comicsTricks.ttf');
  }

  font-family: title-hero;
  text-align: center;
  font-weight: bolder;
  font-size: 4rem;
  margin-bottom: 15px;
  margin-top: 0;
`;

export const AppBackgroundTitle = styled.div`
  background-image: url(${({ theme }) => theme.bgTitleFont});
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  filter: brightness(0.75);
`;

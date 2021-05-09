import styled from "styled-components";

export const AppTitle = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
font-family: 'Montserrat', sans-serif;

font-weight: bolder;
font-size: 4rem;
margin-bottom: 15px;
`;

export const AppBackgroundTitle = styled.div`
background-image: url(${process.env.PUBLIC_URL}/assets/img/font-back.jpg);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
`;
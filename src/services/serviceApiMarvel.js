const BASE_URL_API = "https://gateway.marvel.com/v1/public/";

const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const getUrlApiSearch = (query) =>
  `${BASE_URL_API}characters?nameStartsWith=${query}&apikey=${PUBLIC_KEY}`;

export const apiSearchSuperHero = (query) => {
  const url = getUrlApiSearch(query);
  return fetch(url)
    .then((response) => response.json())
    .then(({ data: { results } }) => results);
};

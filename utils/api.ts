export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const jsonFetch = async (url = BASE_URL) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};

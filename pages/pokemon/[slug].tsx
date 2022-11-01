import React from "react";
import { BASE_URL, jsonFetch } from "../../utils/api";

export { default } from "../../components/PokemonDetails";

export async function getServerSideProps(context) {
  try {
    const data = await jsonFetch(`${BASE_URL}${context.query.slug}`);
    return {
      props: {
        pokemon: data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

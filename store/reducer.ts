import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from ".";

import type { Pokemon } from "../types/pokemon";
import { jsonFetch } from "../utils/api";

export interface State {
  pokemons: { name: string; url: string }[];
  myPokemons: { id: number; name: string }[];
  status: "idle" | "loading" | "failed";
  count: number;
  next: string | null;
  previous: string | null;
  lastPokemonIndex: number;
  error: string;
}

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

const initialState: State = {
  pokemons: [],
  myPokemons: [],
  status: "idle",
  count: 0,
  next: "https://pokeapi.co/api/v2/pokemon/",
  previous: null,
  lastPokemonIndex: 0,
  error: "",
};

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async (_, { getState }) => {
    const state = getState() as AppState;
    const { results, count, next, previous }: PokemonListResponse =
      await jsonFetch(state.pokemon.next);

    return {
      pokemons: results,
      count,
      next,
      previous,
    };
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<{ name: string }>) => {
      state.myPokemons.push({
        id: state.lastPokemonIndex + 1,
        ...action.payload,
      });
      state.lastPokemonIndex += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemons.rejected, (state) => {
        state.status = "idle";
        state.error = "Something went wrong. Please check back later!";
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        const { pokemons, count, next, previous } = action.payload;
        state.status = "idle";
        state.count = count;
        state.next = next;
        state.previous = previous;
        state.pokemons.push(...pokemons);

        if (state.count > state.lastPokemonIndex) {
          state.lastPokemonIndex = state.count;
        }
      });
  },
});

export const { addPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;

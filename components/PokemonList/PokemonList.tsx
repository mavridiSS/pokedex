import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, fetchPokemons } from "../../store/reducer";
import PokemonCard from "../PokemonCard";
import { Container } from "./style";
import type { AppDispatch, AppState } from "../../store";
import { Button } from "../sharedstyles";
import dynamic from "next/dynamic";
import Loader from "../Loader";

const Modal = dynamic(() => import("../Modal/Modal"), {
  ssr: false,
});

export default function PokemonList() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const pokemons = useSelector<AppState>((state) => state.pokemon.pokemons);
  const myPokemons = useSelector<AppState>((state) => state.pokemon.myPokemons);
  const status = useSelector<AppState>((state) => state.pokemon.status);
  const next = useSelector<AppState>((state) => state.pokemon.next);

  console.log(next);

  React.useEffect(() => {
    handleLoadMore();
  }, []);

  const handleLoadMore = () => {
    dispatch(fetchPokemons());
  };

  const handleAddClick = () => {
    setOpen(!open);
  };

  const handleSavePokemon = (data) => {
    dispatch(addPokemon({ name: data.target[0].value }));
  };

  if (status === "loading") return <Loader />;

  return (
    <>
      <Modal
        open={open}
        onClose={handleAddClick}
        onSubmit={handleSavePokemon}
      />
      <Button onClick={handleAddClick}>Add</Button>
      <Container>
        {[...myPokemons, ...pokemons].map((pokemon) => (
          <PokemonCard {...pokemon} key={pokemon.name} />
        ))}
      </Container>
      {next && <Button onClick={handleLoadMore}>Load more</Button>}
      {!next && <h2>And that's all folks!</h2>}
    </>
  );
}

import React from "react";
import { useDispatch } from "react-redux";
import { addPokemon, fetchPokemons } from "../../store/reducer";
import PokemonCard from "../PokemonCard";
import { Container } from "./style";
import { AppDispatch, useAppSelector } from "../../store";
import { Button } from "../sharedstyles";
import dynamic from "next/dynamic";
import Loader from "../Loader";

const Modal = dynamic(() => import("../Modal/Modal"), {
  ssr: false,
});

export default function PokemonList() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const pokemons = useAppSelector((state) => state.pokemon.pokemons);
  const myPokemons = useAppSelector((state) => state.pokemon.myPokemons);
  const status = useAppSelector((state) => state.pokemon.status);
  const next = useAppSelector((state) => state.pokemon.next);

  React.useEffect(() => {
    handleLoadMore();
  }, []);

  const handleLoadMore = () => {
    dispatch(fetchPokemons());
  };

  const handleAddClick = () => {
    setOpen(!open);
  };

  const handleSavePokemon = (e) => {
    e.preventDefault();
    dispatch(addPokemon({ name: e.target[0].value }));
    setOpen(!open);
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

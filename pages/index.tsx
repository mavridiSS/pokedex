import { Container, Main, Header, Logo } from "../components/sharedstyles";
import Image from "next/image";
import PokemonList from "../components/PokemonList";
import { useAppSelector } from "../store";
import Error from "../components/Error";

export default function Home() {
  const error = useAppSelector((state) => state.pokemon.error);

  return (
    <Container>
      <Header>
        <Logo>
          <Image src="/pokedex.png" layout="fill" priority />
        </Logo>
      </Header>
      <Main>{error ? <Error error={error} /> : <PokemonList />}</Main>
    </Container>
  );
}

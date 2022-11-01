import { Container, Main, Header, Logo } from "../components/sharedstyles";
import Image from "next/image";
import PokemonList from "../components/PokemonList";

export default function Home() {
  return (
    <Container>
      <Header>
        <Logo>
          <Image src="/pokedex.png" layout="fill" priority />
        </Logo>
      </Header>
      <Main>
        <PokemonList />
      </Main>
    </Container>
  );
}

import React from "react";
import { Pokemon } from "../../types/pokemon";
import {
  Container,
  ImageContainer,
  Dimension,
  StatName,
  StatValue,
  Stats,
  Stat,
  Wrapper,
} from "./style";
import {
  PokemonType,
  PokeNumber,
  PokeTitle,
  PokeTypeContainer,
} from "../sharedstyles";
import Image from "next/image";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonDetails({ pokemon }: Props) {
  const id = pokemon.id;
  const name = pokemon.name;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <Container>
      <Wrapper types={pokemon.types}>
        <PokeNumber>#{id}</PokeNumber>
        <PokeTitle>{name}</PokeTitle>
        <ImageContainer>
          <Image src={imageUrl} layout="fill" />
        </ImageContainer>

        <PokeTypeContainer>
          {pokemon.types?.map((type) => (
            <PokemonType key={type.slot} type={type.type.name}>
              {type.type.name}
            </PokemonType>
          ))}
        </PokeTypeContainer>
        <div>
          <p>
            <Dimension>Height:</Dimension>
            {pokemon.height}m
          </p>
          <p>
            <Dimension>Weight:</Dimension>
            {pokemon.weight}kg
          </p>
        </div>
        <Stats>
          {pokemon.stats.map(({ stat, base_stat }) => (
            <Stat key={stat.name}>
              <StatName>{stat.name}</StatName>
              <StatValue>{base_stat}</StatValue>
            </Stat>
          ))}
        </Stats>
      </Wrapper>
    </Container>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PokeNumber, PokeTitle } from "../sharedstyles";
import { Container, ImageContainer } from "./style";

interface Props {
  name: string;
  url: string;
  id?: string;
}

const fallbackImageSrc =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg";

export default function PokemonCard({ name, url, id }: Props) {
  const pokemonId = id || url.match(/pokemon\/(\d+)\//)[1];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
  const [imageSrc, setImageSrc] = React.useState(imageUrl);

  const common = (
    <Container>
      <ImageContainer>
        <Image
          src={imageSrc}
          layout="fill"
          onError={() => {
            setImageSrc(fallbackImageSrc);
          }}
        />
      </ImageContainer>
      <PokeNumber>#{pokemonId}</PokeNumber>
      <PokeTitle>{name}</PokeTitle>
    </Container>
  );

  if (id) return common;

  return <Link href={`/pokemon/${name.toLowerCase()}`}>{common}</Link>;
}

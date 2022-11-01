import Image from "next/image";
import React from "react";
import { LoadingText, GifContainer, Container } from "./style";

export default function Loader() {
  return (
    <Container>
      <LoadingText>Loading...</LoadingText>
      <GifContainer>
        <Image src={"https://i.gifer.com/VgI.gif"} layout="fill" />
      </GifContainer>
    </Container>
  );
}

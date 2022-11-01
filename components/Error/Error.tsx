import Image from "next/image";
import { Logo } from "../sharedstyles";

const image =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg";

interface Props {
  error: string;
}

const Error = ({ error }: Props) => {
  return (
    <>
      <Logo>
        <Image src={image} layout="fill" />
      </Logo>
      {error}
    </>
  );
};

export default Error;

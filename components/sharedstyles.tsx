import styled from "styled-components";

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 300px;
  height: 80px;
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 250px;
    height: 60px;
  }
`;

const Button = styled.button<{ variant?: string }>`
  text-transform: uppercase;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  color: ${(props) => (props.variant === "secondary" ? "#000" : "#fff")};
  background-color: ${(props) =>
    props.variant === "secondary" ? "" : "#1976d2"};
`;

const PokemonType = styled.div<{ type: string }>`
  background: ${(props) => `var(--${props.type})`};
  box-shadow: ${(props) => `0 0 20px var(--${props.type})`};
  width: 60px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
`;

const PokeTitle = styled.h3`
  text-transform: capitalize;
  font-size: 1em;
  font-family: "Press Start 2P", cursive;
  word-break: break-word;
`;

const PokeNumber = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 25px;
`;

const PokeTypeContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export {
  Container,
  Main,
  Button,
  PokemonType,
  PokeTitle,
  PokeNumber,
  PokeTypeContainer,
  Logo,
  Header,
};

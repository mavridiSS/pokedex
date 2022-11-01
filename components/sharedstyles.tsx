import styled from "styled-components";

const flexContainer = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  ${flexContainer}
  padding: 0 0.5rem;
  flex-flow: column nowrap;
`;

const Header = styled.header`
  ${flexContainer}
`;

const Main = styled.main`
  ${flexContainer}
  flex: 1;
  flex-direction: column;
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
  ${flexContainer}
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

const Custom404Container = styled.div`
  ${flexContainer}
  flex-direction: column;
  width: 100vw;
  height: 100vh;
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
  Custom404Container,
};

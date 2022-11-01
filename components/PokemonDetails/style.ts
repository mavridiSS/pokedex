import styled from "styled-components";
import { colorTypeGradients } from "../../utils/gradients";

export const PokemonType = styled.div<{ type: string }>`
  background: ${(props) => `var(--${props.type})`};
  box-shadow: ${(props) => `0 0 20px var(--${props.type})`};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Wrapper = styled.div<{ types }>`
  border-radius: 1rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 5vw;
  background: ${(props) =>
    `linear-gradient(${colorTypeGradients(props.types).join(",")})`};

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

export const Dimension = styled.span`
  font-size: 20px;
  font-family: "VT323", monospace;
  font-weight: 600;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  background-color: hsla(0, 0%, 100%, 0.25098039215686274);
  padding: 10px;
  border-radius: 1rem;
`;

export const Stat = styled.div`
  width: 135px;
`;

export const StatName = styled.div`
  font-size: small;
  text-transform: uppercase;
  color: #dc143c;
`;

export const StatValue = styled.div``;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --grass: #5FBD58;
    --bug: #92BC2C;
    --dark: #595761;
    --dragon: #0C69C8;
    --electric: #F2D94E;
    --fairy: #EE90E6;
    --fighting: #D3425F;
    --fire: #dc872f;
    --flying: #A1BBEC;
    --ghost: #5F6DBC;
    --ground: #DA7C4D;
    --ice: #75D0C1;
    --normal: #A0A29F;
    --poison: #B763CF;
    --psychic: #ff2ca8;
    --rock: #a38c21;
    --steel: #5695A3;
    --water: #539DDF;
  }

  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      background-image: url(/bg.png);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

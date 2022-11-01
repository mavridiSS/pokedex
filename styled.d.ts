import "styled-components";

type Breakpoint = "xs" | "xxs" | "sm" | "lg" | "xl" | "mobile-l" | "mobile-m";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
    breakpoints: Record<Breakpoint, string>;
  }
}

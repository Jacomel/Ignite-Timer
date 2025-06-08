import "styled-components";
import { defaultThemes } from "../Styles/Themes/default";

type ThemeType = typeof defaultThemes;

declare module "styled-components" {
  export interface DefaultThemes extends ThemeType {}
}

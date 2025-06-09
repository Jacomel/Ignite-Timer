import 'styled-components';
import { defaultThemes } from '../Styles/themes/default';

type ThemeType = typeof defaultThemes;

declare module 'styled-components' {
   export interface defaultThemes extends ThemeType {}
}
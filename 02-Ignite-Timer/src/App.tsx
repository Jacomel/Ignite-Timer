import { ThemeProvider } from 'styled-components';
import { defaultThemes } from './Styles/themes/default';
import { GlobalStyle } from './Styles/themes/global';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <BrowserRouter>
       <Router />
      </BrowserRouter>
     <GlobalStyle />
    </ThemeProvider>
  )
}


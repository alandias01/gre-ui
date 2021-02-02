import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from "@material-ui/styles";
import { Main } from './components/main'
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { TopBar } from './components/TopBar';

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
});

const SW = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <TopBar />
      <Container style={{ marginTop: "20px" }}>
        <Main />
      </Container>
    </BrowserRouter>

  </ThemeProvider>
);


ReactDOM.render(<SW />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

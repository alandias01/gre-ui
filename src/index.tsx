import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from "@material-ui/styles";
import { Main } from './components/main'

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
});

const SW = () => (
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>
)

ReactDOM.render(<SW />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

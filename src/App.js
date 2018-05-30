import React, { Component } from 'react';
import './App.css';
import LoginPage from './authorization/login-page/loginPage';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a4a4a4',
      main: '#757575',
      dark: '#494949',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5b92d5',
      main: '#1e65a3',
      dark: '#003b74',
      contrastText: '#000',
    },
  },
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <LoginPage />
      </MuiThemeProvider>
    );
  }
}


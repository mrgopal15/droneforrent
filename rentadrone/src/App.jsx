import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { PRIMARY_COLOR } from './config';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';

export default () => {
  let blueTheme = createMuiTheme({
    palette: {
      primary: PRIMARY_COLOR
    }
  });

  return (
    <ThemeProvider theme={blueTheme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}
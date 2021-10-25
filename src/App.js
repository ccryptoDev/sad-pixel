import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import { LaunchingSoon } from './pages'
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={LaunchingSoon} />
            <Route exact path="/launching-soon" component={LaunchingSoon} />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;

import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';
import {
    teal700, teal500,
    indigo200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

import Home from './container/home';
import About from './container/about';

const muiTheme = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    margin: "1em auto",
    palette: {
        primary1Color: teal700,
        primary2Color: teal500,
        primary3Color: grey400,
        accent1Color: indigo200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: '#FFF',
        alternateTextColor: white,
        canvasColor: "#fff",
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: teal700,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    }
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About} />
        </Switch>
        </MuiThemeProvider>
    );
  }
}

export default App;

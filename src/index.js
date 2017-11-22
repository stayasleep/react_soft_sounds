import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <App/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();

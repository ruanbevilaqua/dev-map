import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
    , document.getElementById('root'));

// Esta é uma tentativa de implementar as rotas no react
// const express = require('express');
// const routes = require('./routes.js');

// const app = express();
// app.use(routes);
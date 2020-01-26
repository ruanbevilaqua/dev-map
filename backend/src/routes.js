const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

// Rotas dev 
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

// Rotas App Mobile
routes.get('/search', SearchController.index);

module.exports = routes;
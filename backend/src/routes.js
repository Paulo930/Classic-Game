const express = require('express');
const GameController = require('./Controllers/GameController');
const routes = express.Router();

routes.get('/', GameController.Home);

module.exports = routes;
const express = require('express');

const ContactController = require('./controllers/ContactController');

const routes = express.Router();

routes.get('/contacts', ContactController.index);
routes.post('/contacts', ContactController.store);
routes.get('/contacts/:id', ContactController.show);
routes.put('/contacts/:id', ContactController.update);
routes.delete('/contacts/:id', ContactController.destroy);

module.exports = routes;
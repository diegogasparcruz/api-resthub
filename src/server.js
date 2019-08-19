const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@startup-gl6ih.mongodb.net/contact?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log('Running resthub on port ' + port);
});
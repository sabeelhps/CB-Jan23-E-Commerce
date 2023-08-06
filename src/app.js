const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const { healthcheckRoutes, v1Routes } = require('./routes');

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 5000 }));

app.use(healthcheckRoutes);
app.use('/api/v1', v1Routes);

module.exports = app;

// Fichero que contiene todos los manejadores de la aplicación
const express = require('express');

// Crear la APP
const app = express();

// TODO: Configuración de los manejadores
app.cors(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'));

module.exports = app;
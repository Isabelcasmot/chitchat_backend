// Fichero que contiene todos los manejadores de la aplicación
const express = require('express');
const cors = require('cors');
// Crear la APP
const app = express();

// TODO: Configuración de los manejadores
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'));

module.exports = app;

//Instalar:
//npm install bcrypt
//npm install dayjs
//npm install jsonwebtoken
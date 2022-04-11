// Configuración del servidor
const http = require('http');
const app = require('../app');

// Config .env
require('dotenv').config();
require('../config/db.config')

const server = http.createServer(app);

let PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
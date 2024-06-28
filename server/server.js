const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

// Servidor da aplicação com Express.
const PORT = process.env.PORT || 3000;
const PATH_TO_INDEX = '/dist/static/browser';
const app = express();

// Configuração do proxy das requisições à API.
app.use('/api', createProxyMiddleware({
  target: `${process.env.API_SERVER_BASE_URL}/api` ,
  changeOrigin: true
}));

// Servir a aplicação estática
app.use(express.static(__dirname + PATH_TO_INDEX));

// Redirecionar as requisições para o index.html
app.get('/app/*', function(req, res) {
  res.sendFile(path.join(__dirname + PATH_TO_INDEX + '/index.html'));
});

// Subir o servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
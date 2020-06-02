const express = require('express'); //Importanbdo o Express
const cors = require('cors'); // Importando o Cors
const routes = require('./routes'); //Importando as Rotas

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.json());
// Usando dados do arquivo routes.js
app.use(routes);

app.listen(3333);
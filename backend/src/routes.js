const express = require('express'); // Importando o Express
const OngController = require('./controllers/OngController'); // Importando Controles das ONGS
const IncidentController = require('./controllers/IncidentController'); // Importando Controles dos Incidents
const ProfilleController = require('./controllers/ProfilleController'); // Importando Controles dos Incidents
const SessionController = require('./controllers/SessionController'); // Importando Seção

const routes = express.Router(); // Cria Rotas


routes.post('/sessions', SessionController.create);

// CRUD - ONG
//  Rota para listar todos os dados inseridos na Tabela ongs
routes.get('/ongs', OngController.index);
// Rota para Adicionar dados a tabela Ongs
routes.post('/ongs', OngController.create);


// Rota para listar incidentes inseridos por uma ong especifica
routes.get('/profile', ProfilleController.index);


// CRUD - Incidents
// Rota para Listar dados a tabela Incidents
routes.get('/incidents', IncidentController.index);
// Rota para Adicionar dados a tabela Incidents
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes; //Exportando as Rotas
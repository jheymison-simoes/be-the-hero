const connection = require('../database/connection'); // Importa a Conecção com o Banco de Dados
const crypto = require('crypto'); // Crypto: Gera numeros aleatórios

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-ed
  */

  /**
   * Tipos de Parametros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requiseção, utilizado para criar ou alterar recursos
   */

   /**
    * Banco de dados:
    * 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Instalção BD:
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */

module.exports = {
    // Rota para Adicionar dados a tabela Ongs
    async index (request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    //  Rota para listar todos os dados inseridos na Tabela ongs
    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');//Gerando id de numeros e letras aleatórios

        // Inserindo dados na Tabela ongs
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({id});
    }
}
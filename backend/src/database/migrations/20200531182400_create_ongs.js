
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};

/**
 * Cria Table:
 * npx knex migrate:make *Nome da Tabela*
 * 
 * Atualiza BD:
 * npx knex migrate:latest
 * 
 * Desfaz a ultima
 * npx knex migrate:rollback
 * 
 * Mostra comandos:
 * npx knex
 */
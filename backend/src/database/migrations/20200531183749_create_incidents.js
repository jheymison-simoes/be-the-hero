
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
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
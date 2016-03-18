'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('user_name', 20);
    table.string('email').unique().notNullable();
    table.string('password', 63);
  });
};

exports.down = function(knex) {

};

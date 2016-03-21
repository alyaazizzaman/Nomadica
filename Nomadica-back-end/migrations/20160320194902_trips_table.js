"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('trips', function(table) {
    table.increments();
    table.integer('user_id');
    table.string('trip_title', 50);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trips');
};

"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('text_entries', function(table) {
    table.increments();
    table.integer('user_id');
    table.integer('trip_id');
    table.integer('entry_id');
    table.timestamp('date_time');
    table.string('text_entry_title', 100);
    table.text('content', 3000);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('text-entries');
};

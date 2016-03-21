"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('photos', function(table) {
    table.increments();
    table.integer('user_id');
    table.integer('trip_id');
    table.integer('entry_id');
    table.timestamp('date_time');
    table.string('photo_caption', 200);
    table.string('img_URI', 1000)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('photos');

};

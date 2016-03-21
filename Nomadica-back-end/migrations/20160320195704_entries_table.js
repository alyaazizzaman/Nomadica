
exports.up = function(knex, Promise) {
  return knex.schema.createTable('entries', function(table) {
    table.increments();
    table.integer('user_id');
    table.integer('trip_id');
    table.string('entry_title', 50);
    table.timestamp('date_time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('entries');
};

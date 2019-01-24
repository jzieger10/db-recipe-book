
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: "Boring Pizza", instructions:"Add sauce and cheese to a circular dough", dish_id: 1}
      ]);
    });
};

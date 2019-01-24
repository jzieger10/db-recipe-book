
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: "flour", units: "cups"},
        { name: "sugar", units: "cups"},
        { name: "water", units: "cups"},
      ]);
    });
};

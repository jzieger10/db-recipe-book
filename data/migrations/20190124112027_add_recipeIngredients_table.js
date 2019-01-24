
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable("recipeIngredients", function(tbl) {
        tbl.primary(["recipe_id", "ingredient_id"])
        tbl.timestamp("createdAt").defaultTo(knex.fn.now());
        tbl.integer("recipe_id")
            .unsigned()
            .references("id")
            .inTable("recipes");
        tbl.integer("ingredient_id")
            .unsigned()
            .references("id")
            .inTable("ingredients");
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipeIngredients')
};

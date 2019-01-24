exports.up = function(knex, Promise) {
	return knex.schema
		.createTable("recipes", function(tbl) {
			tbl.increments();
			tbl.string("name", 255)
				.notNullable()
                .unique("uq_recipe_name");
            tbl.text("instructions", )
            tbl.timestamp("createdAt").defaultTo(knex.fn.now());
            tbl.integer("dish_id")
				.unsigned()
				.references("id")
				.inTable("dishes");
		})
		.createTable("ingredients", function(tbl) {
			tbl.increments();
			tbl.string("name", 255)
				.notNullable()
				.unique("uq_ingredient_name");
            tbl.timestamp("createdAt").defaultTo(knex.fn.now());
            
		});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes').dropTableIfExists('ingredients');
};

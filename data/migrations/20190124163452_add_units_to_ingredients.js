
exports.up = function(knex, Promise) {
    return knex.schema.table("ingredients", tbl => {
		tbl.string("units", 128);
	});
};

exports.down = function(knex, Promise) {
    return knex.schema.table('ingredients', tbl => {
        tbl.dropColumn("units");
    })
};

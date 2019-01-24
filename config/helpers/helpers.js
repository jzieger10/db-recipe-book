//  `getDishes()`: should return a list of all dishes in the database.
// - `addDish(dish)`: should add the **dish** to the database and return the `id` of the new **dish**.
// - `getDish(id)`: should return the **dish** with the provided `id` and include a list of the related recipes.
// - `getRecipes()`: should return a list of all recipes in the database including the **dish** they belong to.
// - `addRecipe(recipe)`: should add a **recipe** to the database and return the `id` of the new **recipe**.

const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

const helpers = {
	getDishes: () => {
		console.log("This is the getDishes function running");
		return db.select("*").from("dishes");
    },
    addDish: dish => {
        console.log("This is the addDish function running");
        // db("dishes").insert(dish)
    },
    getDish: id => {
        console.log("This is the getDish function running");
        db.select().where("id","id")
        
        // const dish = db("dishes")
        //     .where("id", id)
        //     .first();

        // const recipes = db("recipes")
        //     .select("name", "id")
        //     .where("dish_id", id);

        // return Promise.all([dish, recipes]).then(results => {
        //     let [dish, recipes] = results;
        //     let result = { id: dish.id, name: dish.name, recipes: recipes };
        //     return result;
        // });
    
    },
    getRecipes: () => {
        console.log("This is the getRecipes function running");
        // db.select()
    },
    addRecipe: recipe => {
        console.log("This is the addRecipe function running");
        // db.insert()
    }
};

module.exports = helpers;

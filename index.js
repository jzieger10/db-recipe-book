const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile.js");
const server = express();
const db = knex(knexConfig.development);
const helpers = require('./config/helpers/helpers.js')
const dishesRouter = require("./config/routes/dishesRouter.js");

server.use(express.json());


server.get('/', (req, res) => {
    res.json({message: "Server Alive on 5000"})
    // console.log(helpers.getDishes()); //Just for testing
})

server.use("/dishes", dishesRouter);

server.listen(5000, () => console.log("Server running on 5000"));

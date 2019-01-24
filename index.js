const express = require("express");
const knex = require("knex");

const knexConfig = require("./knexfile.js");

const server = express();

server.use(express.json());

const db = knex(knexConfig.development);

server.listen(5000, () => console.log("Server running on 5000"));
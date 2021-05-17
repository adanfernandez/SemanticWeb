var express = require("express");
var app = express();


const { getCoaches } = require("./business/wikidata/queries");
const { getStadiums } = require("./business/wikidata/queries");
const { getChiefs } = require("./business/wikidata/queries");
const repository = require("./persistence/repository");
const dbConnection = require('./persistence/connection');

// Define port
app.set('port', Number(process.env.PORT) || 5000);

require("./router/routers.js")(app);


app.listen(app.get('port'), () => {
    console.log("Server running");
    repository.init(dbConnection());
    repository.truncateTable("tcoach", resp => {
        getCoaches(repository, res => {
            console.log("Coach loaded");
        });
    });
    repository.truncateTable("tstadium", resp => {
        getStadiums(repository, res => {
            console.log("Stadium loaded");
        });
    });
    repository.truncateTable("tchiefs", resp => {
        getChiefs(repository, res => {
            console.log("Chief loaded");
        });
    });
});
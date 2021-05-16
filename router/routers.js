const { getCoaches } = require("../business/wikidata/queries");
const { getStadiums } = require("../business/wikidata/queries");

module.exports = function(app) {
    app.get("/coach", function(req, res) {
        getCoaches(resp => {
            res.send(resp);
        });
    });

    app.get("/stadiums", function(req, res) {
        getStadiums(resp => {
            res.send(resp);
        });
    });
}
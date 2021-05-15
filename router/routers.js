const { getCoaches } = require("../business/wikidata/queries");

module.exports = function(app) {
    app.get("/coach", function(req, res) {
        getCoaches(resp => {
            //console.log(resp);
            res.send(resp);
        });
    });
}
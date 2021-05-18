const { getTitlesByCoach } = require("../business/rdf/rdf");


module.exports = function(app) {
    app.get("/coach", function(req, res) {
        getTitlesByCoach(resp => {
            res.send(resp);
        });
    });

    app.get("/stadiums", function(req, res) {

    });
}
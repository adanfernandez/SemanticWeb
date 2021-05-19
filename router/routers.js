const { getTitlesByCoach } = require("../business/rdf/rdf");
const { getTitlesByStadium } = require("../business/rdf/rdf");
const { getTitlesByChief } = require("../business/rdf/rdf");


module.exports = function(app, swig) {
    app.get("/home", function(req, res) {
        getTitlesByCoach(resp => {
            var page = swig.renderFile('views/index.html', {});
            res.send(page);
        });
    });

    app.get("/coach", function(req, res) {
        getTitlesByCoach(resp => {
            res.send(resp);

        });
    });

    app.get("/stadium", function(req, res) {
        getTitlesByStadium(resp => {
            res.send(resp);
        });
    });

    app.get("/chief", function(req, res) {
        getTitlesByChief(resp => {
            res.send(resp);
        });
    });
}
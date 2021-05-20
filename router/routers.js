const { getTitlesByCoach } = require("../business/rdf/rdf");
const { getTitlesByStadium } = require("../business/rdf/rdf");
const { getTitlesByChief } = require("../business/rdf/rdf");

const { getTitlesByCoachTurtle } = require("../business/rdf/rdf");


var fs = require('fs');
const { resolve } = require("path");


module.exports = function(app, swig) {
    app.get("/home", function(req, res) {
        getTitlesByCoach(resp => {
            var page = swig.renderFile('views/index.html', {});
            res.send(page);
        });
    });

    app.get("/coach", function(req, res) {
        getTitlesByCoach(resp => {
            var page = swig.renderFile('views/coach.html', { coaches: resp });
            res.send(page);
        });
    });

    app.get("/stadium", function(req, res) {
        getTitlesByStadium(resp => {
            var page = swig.renderFile('views/stadium.html', { stadiums: resp });
            res.send(page);
        });
    });

    app.get("/chief", function(req, res) {
        getTitlesByChief(resp => {
            var page = swig.renderFile('views/chief.html', { chiefs: resp });
            res.send(page);
        });
    });

    app.get('/download/coach', function(req, res) {
        getTitlesByCoachTurtle(resp => {
            fs.writeFile(`${__dirname}/../files/miw.ttl`, resp, function(err) {
                if (err) throw err;
                const file = `${__dirname}/../files/miw.ttl`;
                res.download(file);
            });
        });

    });
}
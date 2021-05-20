const rdf = require('rdf');
const { NamedNode, BlankNode, Literal } = rdf;
const Model = require('./model');

// Database
const repository = require("../../persistence/repository");
const dbConnection = require('../../persistence/connection');

module.exports = {
    getTitlesByCoach: function(functionCallback) {
        repository.init(dbConnection());
        repository.getTitlesByCoach(result => {
            const triples = [];
            Array.from(result).forEach(resultado => {
                const coach = resultado['coach'];
                const coachname = resultado['coachname'];

                const title = resultado['title'];
                const titlename = resultado['titlename'];

                const date = resultado['date'];

                const predicate = 'https://www.wikidata.org/wiki/Q18560095';
                const turtle = `<${coach}> <${predicate}> "${title}" .`;

                const model = new Model(coachname, titlename, date, rdf.TurtleParser.parse(turtle).graph.toArray().join("\n"));

                triples.push(model);
            });
            functionCallback(triples);
        });
    },

    getTitlesByStadium: function(functionCallback) {
        repository.init(dbConnection());
        repository.getTitlesByStadium(result => {
            const triples = [];
            Array.from(result).forEach(resultado => {
                const stadium = resultado['stadium'];
                const stadiumname = resultado['stadiumname'];

                const title = resultado['title'];
                const titlename = resultado['titlename'];

                const date = resultado['date'];

                const predicate = 'https://www.wikidata.org/wiki/Q18560095';
                const turtle = `<${stadium}> <${predicate}> "${title}" .`;

                const model = new Model(stadiumname, titlename, date, rdf.TurtleParser.parse(turtle).graph.toArray().join("\n"));

                triples.push(model);
            });
            functionCallback(triples);
        });
    },

    getTitlesByChief: function(functionCallback) {
        repository.init(dbConnection());
        repository.getTitlesByChief(result => {
            const triples = [];
            Array.from(result).forEach(resultado => {
                const chief = resultado['chief'];
                const chiefname = resultado['chiefname'];

                const title = resultado['title'];
                const titlename = resultado['titlename'];

                const date = resultado['date'];

                const predicate = 'https://www.wikidata.org/wiki/Q18560095';
                const turtle = `<${chief}> <${predicate}> <${title}> .`;

                const model = new Model(chiefname, titlename, date, rdf.TurtleParser.parse(turtle).graph.toArray().join("\n"));

                triples.push(model);
            });
            functionCallback(triples);
        });
    },


    getTitlesByCoachTurtle: function(functionCallback) {
        repository.init(dbConnection());
        repository.getTitlesByCoachOrderByCoachName(result => {
            let turtleTotal = "@prefix entity: <http://www.wikidata.org/entity/> . @prefix property: <https://www.wikidata.org/wiki/s> .";
            let name = "";
            let turtle = "";
            Array.from(result).forEach(resultado => {
                const coach = resultado['coach'].replace("http://www.wikidata.org/entity/", "entity:");
                const title = resultado['title'].replace("http://www.wikidata.org/entity/", "entity:");;
                let coachname = resultado['coachname'];
                const predicate = 'property:Q18560095';
                if (name === coachname) {
                    turtle = ` , "${title}"`;
                } else {
                    if (name === "") {
                        turtle = ` ${coach} ${predicate} "${title}"`;
                    } else {
                        turtle = ` . ${coach} ${predicate} "${title}"`;
                    }
                }
                turtleTotal += turtle;
                name = coachname;
            });
            functionCallback(turtleTotal);
        });
    },


    getTitlesByStadiumTurtle: function(functionCallback) {
        repository.init(dbConnection());
        repository.getTitlesByStadiumOrderByStadiumName(result => {
            let turtleTotal = "@prefix entity: <http://www.wikidata.org/entity/> . @prefix property: <https://www.wikidata.org/wiki/s> .";
            let name = "";
            let turtle = "";
            Array.from(result).forEach(resultado => {
                const coach = resultado['stadium'].replace("http://www.wikidata.org/entity/", "entity:");
                const title = resultado['title'].replace("http://www.wikidata.org/entity/", "entity:");;
                let stadiumname = resultado['stadiumname'];
                const predicate = 'property:Q18560095';
                if (name === stadiumname) {
                    turtle = ` , "${title}"`;
                } else {
                    if (name === "") {
                        turtle = ` ${coach} ${predicate} "${title}"`;
                    } else {
                        turtle = ` . ${coach} ${predicate} "${title}"`;
                    }
                }
                turtleTotal += turtle;
                name = stadiumname;
            });
            functionCallback(turtleTotal);
        });
    },

    getTitlesByChiefTurtle: function(functionCallback) {
        repository.init(dbConnection());
        repository.getTitlesByChief(result => {
            let turtleTotal = "";
            Array.from(result).forEach(resultado => {
                const chief = resultado['chief'];
                const title = resultado['title'];
                const predicate = 'https://www.wikidata.org/wiki/Q18560095';
                const turtle = `<${chief}> <${predicate}> <${title}> .`;
                turtleTotal += turtle;
            });
            functionCallback(turtleTotal);
        });
    },
}
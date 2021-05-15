var express = require("express");
const { getChiefs } = require("./wikidata/queries");
var app = express();

// Define port
app.set('port', Number(process.env.PORT) || 5000);

app.listen(app.get('port'), () => {
    console.log(`Server running in ${app.get('port')}`);
    console.log(getChiefs());
});
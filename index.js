var express = require("express");
var app = express();

// Define port
app.set('port', Number(process.env.PORT) || 5000);

require("./router/routers.js")(app);


app.listen(app.get('port'), () => {
    console.log(`Server running in ${app.get('port')}`);
});
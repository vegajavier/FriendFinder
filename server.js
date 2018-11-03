let express = require ('express');
//bodyParser object exposes various factories to create middlewares. All middlewares will populate the req.body
let bodyParser = require("body-parser");

//Put a description in it. It's a string. This helps people discover your package, as it's listed in npm search.
let path = require('path');

let app = express()
let PORT = process.env. PORT || 8080;

require('');
require('')

app.listen(PORT, function(){
    console.log("Listening on PORT ${PORT}")
})
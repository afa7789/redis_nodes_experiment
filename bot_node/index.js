//DotEnv to use .env as enviroment param
require('dotenv').config()
//Load Express
var express = require('express');
// Require redis_client
var redis_obj = require('./redis_client');

// start Express
var app = express();

let var_gotten = "";

// Initial structure for my BOT pages
// Hello World to test get
app.get('/client_debug', function (req, res) {
  res.send( redis_obj.print(client_test) );
});

app.get('/', function (req, res) {
    res.send( "Valor Lido do redis: " + var_gotten );
});
  
// Listening app
app.listen(process.env.PORT, function () {
    console.log(
        "Example app listening on port "+ process.env.PORT +
        '\n' +
        "link for you http://localhost:"+process.env.PORT+" !"
    );
});

// REDIS PART
// Create redis_client
const client_test = redis_obj.client(process.env.REDIS_URL,process.env.REDIS_PORT);
// Start Basic Listener for redis_client
if( process.env.DEBUG_MODE )
    redis_obj.basic_on(client_test);

var myVar = setInterval(intervaledFunction, 1000);

function intervaledFunction() {
    redis_obj.get_value(client_test).then(result=>{
        var_gotten = result;    
    }); 
    console.log('var ' + var_gotten);
}


//DotEnv to use .env as enviroment param
require('dotenv').config()
//Load Express
var express = require('express');
//Load the request module
var request = require('request');
// Require redis_client
var redis_obj = require('./redis_client');

// start Express
var app = express();

// Create redis_client
const client_test = redis_obj.client(process.env.REDIS_URL,process.env.REDIS_PORT);

// Start Basic Listener for redis_client
redis_obj.basic_on(client_test);

// Hello World to test get
app.get('/', function (req, res) {
  res.send( redis_obj.print(client_test) );
});

// Listening app
app.listen(process.env.PORT, function () {
    console.log(
        "Example app listening on port "+ process.env.PORT +
        '\n' +
        "link for you http://localhost:"+process.env.PORT+" !"
    );
});

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    // escrever o redis
    redis_obj.write(client_test,getRandomArbitrary(0,10000))
}

//Lets configure and request
// request({
//     url: 'https://api.coindesk.com/v1/bpi/currentprice.json', //URL to hit
//     method: 'GET', // specify the request type
// }, function(error, response, body){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(response.statusCode, body);
//     }
// });
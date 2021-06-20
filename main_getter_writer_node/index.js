//DotEnv to use .env as enviroment param
require('dotenv').config()
//Load Express
var express = require('express');
//Load the request module
var request = require('request');
// Require redis_client
var redis_client = require('./redis_client');

// start Express
var app = express();

// Create redis_client
const client_test = redis_client.client();

// Start Basic Listener for redis_client
redis_client.basic_on(client_test);

// Hello World to test get
app.get('/', function (req, res) {
  res.send( redis_client.print(client_test) );
});

// Listening app
app.listen(process.env.PORT, function () {
    console.log(
        "Example app listening on port 3000" +
        '\n' +
        "link for you http://localhost:3000 !"
    );
});

// var myVar = setInterval(myTimer, 1000);

function myTimer() {
     //Lets configure and request
    request({
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json', //URL to hit
        method: 'GET', // specify the request type
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
        }
    });

    // escrever o redis
    console.log("intervalo");

}
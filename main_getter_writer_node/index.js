var express = require('express');
var app = express();
require('dotenv').config()

//Load the request module
var request = require('request');

var redis_client = require('./redis_client');

const client_test = redis_client.client();

redis_client.on(client_test);

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log("get")
});

app.listen(process.env.PORT, function () {
    console.log(
        "Example app listening on port 3000" +
        '\n' +
        "link for you https://localhost:3000 !"
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
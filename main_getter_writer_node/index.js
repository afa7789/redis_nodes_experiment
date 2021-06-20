var express = require('express');
var app = express();

// import redis_client  from './redis_client'

// const client_test = redis_client.client();

// redis_client.on(client_test);

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log("get")
});

app.listen(3000, function () {
    console.log(
        "Example app listening on port 3000" +
        '\n' +
        "link for you https://localhost:3000 !"
    );
});

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    // escrever o redis
    console.log("intervalo")
}
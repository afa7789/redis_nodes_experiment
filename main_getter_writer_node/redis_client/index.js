const redis = require('redis');

const client = () => { 

    return redis.createClient({
        host: process.env.REDIS_URL,
        port: process.env.REDIS_PORT
    });
};

const on = (client) =>{
    client.on('ready',function(){
        console.log('Redis ready');
    }).on('error', err => {
        console.log('Error ' + err);
    });
} 

const print_client = (client) => {
    console.log("CLIENT INFO HERE");
    console.log(client);
    console.log("CLIENT INFO HERE");
}

const redis_client = {
    client : client,
    on: on,
    print: print_client
} 

module.exports = redis_client;
const redis = require('redis');

const client = () => { 

    return redis.createClient({
        host: process.env.REDIS_URL,
        port: process.env.REDIS_PORT
    });
};

const basic_on = (client) =>{
    client.on('ready',function(){
        console.log('Redis ready');
    }).on('error', err => {
        console.log('Error ' + err);
    });
} 

const print_client = (client) => {
    return "<style>html{background:black}.json{font-size:20px;color:lightgreen}</style><pre class=\"json\">" + JSON.stringify(client,null,2) +"</pre>";
}

const redis_client = {
    client : client,
    basic_on: basic_on,
    print: print_client
} 

module.exports = redis_client;
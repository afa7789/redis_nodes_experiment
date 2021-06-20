const redis = require('redis');

const client = () => { return redis.createClient({
        host: process.env.REDIS_URL
    });
};

const on = (client) =>{
    console.log("entrei",client);
    client.on('ready',function(){
        console.log('Redis ready');
    }).on('error', err => {
        console.log('Error ' + err);
    });
} 

export const redis_client = {
    client : client,
    on: on
} 
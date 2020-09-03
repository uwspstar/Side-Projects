const redis = require('redis');

// build client
// port:6379 host:127.0.01
const redisClient = redis.createClient(6379, '127.0.0.1');
redisClient.on('error', err => {
    console.error(err);
})
// test
redisClient.set('myName', 'xing', redis.print);
redisClient.get('myName', (err, val) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('val', val);

    // quit
    redisClient.quit();
})
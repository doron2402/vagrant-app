var Hapi = require('hapi');
var PORT = 9999;
var server = new Hapi.Server();

server.connection({
    port: PORT
});

server.register([{
    register: require('./plugins/users'),
    options: {
        message: 'hello'
    }
}, {
    register: require('./plugins/businesses'),
    options: {
        message: 'hello'
    }
}], function(err) {
    if (err) {
        throw (err);
    }
    server.start();
});

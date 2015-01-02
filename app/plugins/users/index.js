var Controller = require('./controller');
var usersPlugin = {
    register: function(server, options, next) {
        server.route([
          {
            method: 'GET',
            path: '/users',
            handler: Controller.getAllUsers
          },
          {
            method: 'GET',
            path: '/users/{id}',
            handler: Controller.getUserById
          }
        ]);
        next();
    }
}

usersPlugin.register.attributes = {
    name: 'users-plugin',
    version: '1.0.0'
};

module.exports = usersPlugin;

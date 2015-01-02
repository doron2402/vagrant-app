var Controller = require('./controller');
var businessesPlugin = {
    register: function(server, options, next) {
        server.route([
          {
            method: 'GET',
            path: '/businesses',
            handler: Controller.getAllBusinesses
          },
          {
            method: 'GET',
            path: '/businesses/{id}',
            handler: Controller.getBusinessById
          }
        ]);
        next();
    }
}

businessesPlugin.register.attributes = {
    name: 'businesses-plugin',
    version: '1.0.0'
};

module.exports = businessesPlugin;

var controller = {};
controller.getAllUsers = function(request, reply) {
    return reply({
        users: [{
            id: 1,
            name: 'adsf'
        }, {
            id: 2,
            name: 'asdfsadfadsf'
        }]
    });
};

controller.getUserById = function(request, reply) {
	return reply({id:1, name: 'asdf'});
};
module.exports = controller;

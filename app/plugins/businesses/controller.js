var controller = {};
controller.getAllBusinesses = function(request, reply) {
    return reply({
        users: [{
            id: 1,
            name: 'business 1'
        }, {
            id: 2,
            name: 'business 2'
        }]
    });
};

controller.getBusinessById = function(request, reply) {
	return reply({id:1, name: 'business 1'});
};
module.exports = controller;

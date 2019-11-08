exports.seed = function(knex) {
	return knex('projects').insert([
		{ name: 'Buena Vista', description: 'New Construction', completed: false },
		{ name: 'Rio Del Mar', description: 'House Remodel', completed: false }
	]);
};

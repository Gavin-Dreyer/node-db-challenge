exports.seed = function(knex) {
	return knex('resources').insert([
		{ name: 'employee1', description: 'journeyman' },
		{ name: 'employee2', description: 'journeyman' },
		{ name: 'employee3', description: 'apprentice' },
		{ name: 'employee4', description: 'apprentice' },
		{ name: 'Impact driver1', description: '' },
		{ name: 'Impact driver2', description: '' },
		{ name: 'Impact driver3', description: '' },
		{ name: 'Impact driver4', description: '' }
	]);
};

exports.seed = function(knex) {
	return knex('projects_and_resrouces').insert([
		{ project_id: 1, resource_id: 1 },
		{ project_id: 1, resource_id: 2 },
		{ project_id: 1, resource_id: 5 },
		{ project_id: 1, resource_id: 6 },
		{ project_id: 2, resource_id: 3 },
		{ project_id: 2, resource_id: 4 },
		{ project_id: 2, resource_id: 7 },
		{ project_id: 2, resource_id: 8 }
	]);
};

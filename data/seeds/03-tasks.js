exports.seed = function(knex) {
	return knex('tasks').insert([
		{
			description: 'Install 200a panel',
			notes: '',
			completed: false,
			project_id: 1
		},
		{
			description: 'Run kitchen light circuit',
			notes: 'WASP NESTS IN THE UPPER: BEWARE',
			completed: false,
			project_id: 1
		},
		{
			description: 'Remove bathroom1 GFCI',
			notes: '',
			completed: false,
			project_id: 2
		},
		{
			description: 'Install bathroom1 GFCI',
			notes: '',
			completed: false,
			project_id: 2
		}
	]);
};

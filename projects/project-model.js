const db = require('../data/db-config.js');

module.exports = {
	findResources,
	findProjects,
	findTasks
};

function findResources() {
	return db('resources');
}

function findProjects() {
	return db('projects');
}

function findTasks() {
	// return db('tasks');
	return db
		.select(
			'tasks.description as TaskDescription',
			'projects.name',
			'projects.description as ProjectDescription'
		)
		.from('tasks')
		.join('projects', 'projects.id', '=', 'tasks.project_id');
}

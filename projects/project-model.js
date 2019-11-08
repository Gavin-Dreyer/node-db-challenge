const db = require('../data/db-config.js');

module.exports = {
	findResources,
	findProjects,
	findTasks,
	addResource,
	addProject,
	addTask
};

function findResources() {
	return db('resources');
}

function addResource(body) {
	return db('resources').insert(body);
}

function findProjects() {
	return db('projects');
}

function addProject(body) {
	return db('projects').insert(body);
}

function findTasks() {
	// return db('tasks');
	return db
		.select(
			'tasks.description as TaskDescription',
			'tasks.completed as TaskCompletion',
			'projects.name',
			'projects.description as ProjectDescription'
		)
		.from('tasks')
		.join('projects', 'projects.id', '=', 'tasks.project_id');
}

function addTask(body) {
	return db('tasks').insert(body);
}

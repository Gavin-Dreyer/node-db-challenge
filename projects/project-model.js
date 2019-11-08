const db = require('../data/db-config.js');

module.exports = {
	findResources,
	findProjects,
	findProjectById,
	findTasks,
	findTaskById,
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

function findProjectById(id) {
	console.log({ id });
	return db
		.select(
			'projects.id as Id',
			'projects.name',
			'projects.description as ProjectDescription',
			'projects.completed',
			// 'tasks.id',
			'tasks.description as tasks'
			// 'tasks.notes',
			// 'tasks.completed'
		)
		.from('projects')
		.join('tasks', 'projects.id', '=', 'tasks.project_id')
		.where({ project_id: id });
}

function addProject(body) {
	return db('projects').insert(body);
}

function findTasks() {
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

function findTaskById(id) {
	return db
		.select(
			'tasks.description as TaskDescription',
			'tasks.completed as TaskCompletion',
			'projects.name',
			'projects.description as ProjectDescription'
		)
		.from('tasks')
		.join('projects', 'projects.id', '=', 'tasks.project_id')
		.where({ project_id: id });
}

function addTask(body) {
	return db('tasks').insert(body);
}

const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/resources', (req, res) => {
	Projects.findResources()
		.then(resources => {
			res.json(resources);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get resources' });
		});
});

router.post('/resources', (req, res) => {
	const resource = req.body;

	Projects.addResource(resource)
		.then(resources => {
			res.status(201).json({ created: resources[0] });
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to add resource' });
		});
});

router.get('/projects', (req, res) => {
	Projects.findProjects()
		.then(projects => {
			res.json(projects);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get projects' });
		});
});

router.post('/projects', (req, res) => {
	const project = req.body;

	Projects.addProject(project)
		.then(project => {
			res.status(201).json(project);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to add project' });
		});
});

router.get('/tasks', (req, res) => {
	Projects.findTasks()
		.then(tasks => {
			res.json(tasks);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get tasks' });
		});
});

router.post('/tasks', (req, res) => {
	const task = req.body;

	Projects.addTask(task)
		.then(task => {
			res.status(201).json(task);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to add task' });
		});
});

module.exports = router;

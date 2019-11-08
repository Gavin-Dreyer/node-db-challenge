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

router.get('/projects', (req, res) => {
	Projects.findProjects()
		.then(projects => {
			res.json(projects);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get projects' });
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

module.exports = router;

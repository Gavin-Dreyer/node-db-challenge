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
			projects = [
				...projects,
				projects.map(item => {
					if (item.completed === 0) {
						return (item.completed = false);
					} else if (item.completed === 1) {
						return (item.copmpleted = true);
					} else {
						return item;
					}
				})
			];
			projects = projects.slice(0, projects.length - 1);

			console.log(projects);
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
			tasks = [
				...tasks,
				tasks.map(item => {
					if (item.TaskCompletion === 0) {
						return (item.TaskCompletion = false);
					} else if (item.TaskCompletion === 1) {
						return (item.TaskCopmpletion = true);
					} else {
						return item;
					}
				})
			];
			tasks = tasks.slice(0, tasks.length - 1);

			console.log(tasks);
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

exports.up = function(knex) {
	return knex.schema
		.createTable('resources', tbl => {
			tbl.increments();
			tbl.string('name').notNullable();
			tbl.string('description');
		})
		.createTable('projects', tbl => {
			tbl.increments();
			tbl.string('name').notNullable();
			tbl.string('description');
			tbl.boolean('completed').notNullable();
		})
		.createTable('tasks', tbl => {
			tbl.increments();
			tbl.string('description').notNullable();
			tbl.string('notes');
			tbl.boolean('completed').notNullable();
			tbl
				.integer('project_id')
				.unsigned()
				.references('id')
				.inTable('projects')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
		.createTable('projects_and_resrouces', tbl => {
			tbl.increments();
			tbl
				.integer('project_id')
				.unsigned()
				.references('id')
				.inTable('projects')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl
				.integer('resource_id')
				.unsigned()
				.references('id')
				.inTable('resources')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('projects_and_resrouces')
		.dropTableIfExists('tasks')
		.dropTableIfExists('projects')
		.dropTableIfExists('resources');
};

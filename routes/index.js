module.exports = function (app) {
	app.get('/', require('./basic/index.js').index);

	/*
	 Basic.
	 */
	app.get('/basic', require('./basic/index.js').index);

	app.get('/basic/typography', require('./basic/typography.js').index);

	app.get('/basic/tables/simple', require('./basic/tables.js').simple);
	app.get('/basic/tables/data', require('./basic/tables.js').data);

	app.get('/basic/navigation/breadcrumbs', require('./basic/navigation.js').breadcrumbs);
	app.get('/basic/navigation/tabs', require('./basic/navigation.js').tabs);
	app.get('/basic/navigation/pills', require('./basic/navigation.js').pills);
	app.get('/basic/navigation/collapsible', require('./basic/navigation.js').collapsible);

	/*
	 Forms.
	 */
	app.get('/forms', require('./forms/basic.js').index);
	app.get('/forms/basic', require('./forms/basic.js').index);

	app.get('/forms/styles/horizontal', require('./forms/styles.js').horizontal);
	app.get('/forms/styles/vertical', require('./forms/styles.js').vertical);
	app.get('/forms/styles/inline', require('./forms/styles.js').inline);
};
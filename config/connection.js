var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'mysql4.gear.host',
	user: 'root',
	password: 'process.env.PASS',
	database: 'burgers_db'
})

connection.connect(function(err) {
	if (err) {
		console.error('error connecting to the database: ' + err.stack);
		return;
	}

	console.log('connected to the database thread ID: ' + connection.threadId);
})

module.exports = connection;
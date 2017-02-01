var mysql = require('mysql');
var connection;

// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'burgers_db'
// })

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgers_db'
	})
}
	

	// connection = mysql.createConnection({
	// host: 'wp433upk59nnhpoh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	// user: 'q45xf8ldoxnxaohi',
	// password: 'maelcjxw274v6i2x',
	// //database: 'burgers_db'

connection.connect(function(err) {
	if (err) {
		console.error('error connecting to the database: ' + err.stack);
		return;
	}

	console.log('connected to the database thread ID: ' + connection.threadId);
})

module.exports = connection;
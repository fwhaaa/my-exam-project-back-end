const mysql = require('mysql');
exports.getConnection = function(){
	let connection = mysql.createConnection({
		host: 'localhost',
		database: 'exam_student',
		user: 'root',
		password: '20020525fwh',
		prt:'3006'
	});
	connection.connect();
	return connection;
};

var mysql =  require('mysql2');

var connection = mysql.createPool({
    host : 'localhost',
    user: 'root',
    password: 'farewell123',
    database: 'project'
  });

module.exports = connection;
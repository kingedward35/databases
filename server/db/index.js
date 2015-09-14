var mysql = require('mysql');
var Sequelize = require('Sequelize');
var orm = new Sequelize('chat', 'root', '');
var User = orm.define('User', {
  username: Sequelize.STRING
});

var Message = orm.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;

/*****************************************
 Non Sequelized version below
******************************************/
// module.exports.connection = mysql.createConnection({
//   // host     : 'localhost',
//   user     : 'root',
//   database : 'chat',
//   password : ''
// });
 
// module.exports.connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   } else {
//     console.log('connected to mysql');
//   }
// });



// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".



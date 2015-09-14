var db = require('../db');

// exports.handlePost = handlePost = function(request, callback) {
//   var requestBody = '';
//   request.on('data', function(data) {
//     requestBody += data;
//   });
//   request.on('end', function() {
//     message = JSON.parse(requestBody);
//     callback(message);    
//   });
//   request.on('error', function(error) {
//     console.log(error);
//   });
// };

// exports.addMessageToDatabase = addMessageToDatabase = function(message) {
//   console.log(message);  
// };
function dbQuery() {
  db.query(queryString, function(err, results) {
    callback(results);
  });
}

module.exports = {
  messages: {
    get: function(callback) {
      var queryString = 'select messages.id, messages.text, messages.roomname, users.username from messages \
                         left outer join users on (messages.userid = users.id) \
                         order by messages.id desc';
      db.query(queryString, function(err, results) {
        callback(results);
    }, // a function which produces all the messages
    post: function(params, callback) {
      var queryString = 'insert into messages(text, userid, roomname) \
                         values (?, (select id from users where username = ? limit 1), ?)';
      db.query(queryString, params function(err, results) {
        callback(results);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      var queryString = 'select * from users';
      db.query(queryString, function(err, results) {
        callback(results);
      });
    },
    post: function(args, callback) {
      var queryString = 'insert into users(username) values (?)';
      db.query(queryString, params function(err, results) {
        callback(results);
      });
    }
  }
};










var models = require('../models');
var bluebird = require('bluebird');

var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];




module.exports = {
  messages: {
    get: function(req, res) {
      Message.findAll({ include: [User] });
        .complete(function(err, results) {
        res.json(results);
      });
    },
    post: function(req, res) {
      User.findOrCreate({username: req.body[username]})
        .complete(function(err, user) {
          var params = {
            text: req.body[text],
            userid: user.id,
            roomname: req.body[roomname]
          };
          Message.create(params)
            .complete(function(err, results) {
              res.sendStatus(201);
            });
        });
    }
  },

  users: {
    get: function(req, res) {
       User.findAll();
        .complete(function(err, results) {
        res.json(results);
      });
    },
    post: function(req, res) {
      User.create({username: req.body[username]})
        .complete(function(err, user) {
          res.sendStatus(201);
      });
    }
  }
};













//var db = require('../db/index.js');

//var headers = {
//   "access-control-allow-origin": "*",
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "content-type, accept",
//   "access-control-max-age": 10 // Seconds.
// };

// exports.sendResponse = sendResponse = function(res, statusCode, data) {
//   statusCode = statusCode || 200;
//   res.writeHead(statusCode, headers);
//   if (data) {
//     res.end(JSON.stringify(data));
//   } else {
//     res.end();
//   }
// };









// module.exports.addMessageToDatabase = addMessageToDatabase = function(message, callback) {
//   console.log(message.username);
//   var date = new Date();
//   var objectId = Math.floor(Math.random() * 1000000).toString();
//   var roomName = message.roomname;
//   var text = message.text;
//   var userName = message.username;
//   var userId;
//   var roomId;

//   var checkId = function(table, field, value, id, callback) {
//     var queryString = 'select ID `from` ' + table + 'where `'+ field +'` =?'
//     db.connection.query(queryString, [value], function(error, results, fields) {
//       if (result) {
//         id = result
//       } else {
//         callback()
//       }
//     });
//   };
  
//   var getId = function() {
    
//   };
  
//   checkUsername(username);

//   var messagePost = {
//     text: text,
//     date: date,
//     userid: userid
//   };

//   db.connection.query('insert into messages set ?', messagePost, function(err, result) {
//     if (err) {
//       console.log('message not added to database');
//     }
//   });
  
// };


// module.exports = {
//   messages: {
//     options: function(req, res) {

//       //sendResponse(res);
//     },
//     get: function(req, res) {
//       models.messages.get(function(err, results) {
//         res.json(results);
//       });
//       // headers['Content-Type'] = "application/JSON";
//       // sendResponse(res);
//     },
//     post: function(req, res) {
//       var params = [req.body[text], req.body[username], req.body[roomname]];
//       models.messages.post(params function(err, results) {
//         res.json(results);
//       });
//       // addMessageToDatabase(req.body);
//       // sendResponse(res);
//     }
//   },

//   users: {
//     // Ditto as above
//     options: function(req, res) {},
//     get: function(req, res) {
//       models.messages.get(function(err, results) {
//         res.json(results);
//       });
//     },
//     post: function(req, res) {
//       var params = [req.body[username]];
//       models.messages.post(params function(err, results) {
//         res.json(results);
//       });
//     }
//   }
// };

var express = require('express');

var app = express();

var users = [
  {
    id: 0,
    name: 'admin'
  },
  {
    id: 1,
    name: 'user'
  }
];

app.get('/', function(req, res){
  res.send('Hello API');
})

app.get('/users', function(req, res){
  res.send(users);
})

app.get('/users/:id', function(req, res){
  var user = users.find(function (user){
    return user.id === Number(req.params.id)
  });
  res.send(user);
})

app.listen(3001, function(){
  console.log('API app started');
})

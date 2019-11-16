var express = require('express');
var bodyParser = require('express')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

app.post('/users', function(req,res){
  var user = {
    id: users.length,
    name: req.body.name
  };
  users.push(user);
  res.send(user);
})

app.listen(3001, function(){
  console.log('API app started');
})

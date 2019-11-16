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

// GET /
app.get('/', function(req, res){
  res.send('Hello API');
})

// GET /users
app.get('/users', function(req, res){
  res.send(users);
})

// GET /users/{id}
app.get('/users/:id', function(req, res){
  var user = users.find(function (user){
    return user.id === Number(req.params.id)
  });
  res.send(user);
})

// POST /users
app.post('/users', function(req,res){
  var user = {
    id: users.length,
    name: req.body.name
  };
  users.push(user);
  res.send(user);
})

// PUT /users/{id}
app.put('/users/:id', function(req,res){
  var user = users.find(function (user){
    return user.id === Number(req.params.id)
  });
  user.name = req.body.name;
  res.sendStatus(200);
})

// DELETE /users/{id}
app.delete('/users/:id', function(req,res){
  users = users.filter(function (user){
    return user.id !== Number(req.params.id);
  })
  res.sendStatus(200);
})

app.listen(3001, function(){
  console.log('API app started');
})

const express = require('express');
const User = require('./models/user');
const Task = require('./models/task');

require('./db/mongoose.js');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.post('/users', (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/users', (req, res) => {
  User.find({}).then((users) => {
    res.status(201).send(users)
  }).catch(e => {
    res.status(500).send(e)
  })
})

app.get('/users/:id', (req, res) => {
  const _id = req.params.id

  User.findById(_id).then((user) => {
    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  }).catch(e => {
    res.status(500).send(e)
  })
})

app.post('/tasks', (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.send(task);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(port, () => {
  console.log('App running on port' + port);
  console.log('http://localhost:' + port);
});

const express = require('express');
const User = require('./models/user');
const Task = require('./models/task');

require('./db/mongoose.js');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
  // user
  //   .save()
  //   .then(() => {
  //     res.status(201).send(user);
  //   })
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
  // User.find({})
  //   .then((users) => {
  //     res.status(201).send(users);
  //   })
  //   .catch((e) => {
  //     res.status(500).send(e);
  //   });
});

app.get('/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }

  // User.findById(_id)
  //   .then((user) => {
  //     console.log(user);
  //     if (!user) {
  //       return res.status(404).send();
  //     }
  //     res.send(user);
  //   })
  //   .catch((e) => {
  //     res.status(500).send(e);
  //   });
});

app.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const validateUpdates = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!validateUpdates) {
    res.status(400).send({ error: 'Invalid update key!' });
  }

  const _id = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const task = await new Task(req.body);
    task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
  // task
  //   .save()
  //   .then(() => {
  //     res.status(201).send(task);
  //   })
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }

  // Task.find({})
  //   .then((users) => {
  //     res.send(users);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });
});

app.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }

  // Task.findById(_id)
  //   .then((task) => {
  //     if (!task) {
  //       return res.status(404).send();
  //     }

  //     res.send(task);
  //   })
  //   .catch((e) => {
  //     res.status(500).send(e);
  //   });
});

app.listen(port, () => {
  console.log('App running on port' + port);
  console.log('http://localhost:' + port);
});

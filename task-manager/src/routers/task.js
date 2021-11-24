const express = require('express');
const Task = require('../models/task');
const router = new express.Router();
const auth = require('../middlewares/auth');

router.post('/tasks', auth, async (req, res) => {
  try {
    // const task = await new Task(req.body);
    const task = new Task({
      ...req.body,
      owner: req.user._id,
    });
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

router.get('/tasks/me', auth, async (req, res) => {
  try {
    // const tasks = await Task.find({owner:req.user._id});
    await req.user.populate('tasks').execPopulate();
    console.log('====>', req.user);
    res.send(req.user.tasks);
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

router.get('/tasks/:id', auth, async (req, res) => {
  const _id = req.params.id;

  try {
    // const task = await Task.findById(_id);
    const task = await Task.findOne({ _id, owner: req.user._id });
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

router.patch('/tasks/:id',auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed'];
  const validateUpdates = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!validateUpdates) {
    return res
      .status(400)
      .send({ error: 'Invalid update attribute for task!' });
  }

  try {
    // const task = await Task.findById(req.params.id);
    const task = await Task.findOne({ id: req.params.id, owner: req.user._id });
    // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    if (!task) {
      return res.status(404).send();
    }

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/tasks/:id', auth ,async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({_id:req.params.id , owner:req.user._id })
    // const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

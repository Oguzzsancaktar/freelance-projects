require('../db/mongoose.js');
const Task = require('../models/task');

// Task.findOneAndDelete('6194dbf95c5bd23e0b0423a1')
//   .then((result) => {
//     console.log(result);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const deletedUser = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('619b7e69e347499dd497ab5b')
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log('err', e);
  });

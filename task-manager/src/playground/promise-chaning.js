require('../db/mongoose.js');
const User = require('../models/user');

// User.findByIdAndUpdate('6194dbf95c5bd23e0b0423a1', { age: 5 })
//   .then((result) => {
//     console.log(result);
//     return User.countDocuments({ age: 5 });
//   })
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const updatedUser = await User.findByIdAndUpdate(id, { age: age });
  const documentCount = await User.countDocuments({ age: age });

  return documentCount;
};

updateAgeAndCount('619b76d7d5d56a0de0201ced', 99)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log('error', e);
  });

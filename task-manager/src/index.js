const express = require('express');


const userRouter = require('./routers/user')
const taskRouter = require('./routers/task');


require('./db/mongoose.js');

const app = express();
app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log('App running on port' + port);
  console.log('http://localhost:' + port);
});

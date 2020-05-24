const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
    // const task = await Task.findById('5eca47944fcc700c046580d2');
    // //fetch owner info from user table by populating the refernce field
    // await task.populate('owner').execPopulate();
    // console.log(task);
    // const user = await User.findById('5eca46b9a03c9141e0b6f4a2');
    // await user.populate('tasks').execPopulate();
    // console.log(user.tasks);
};

main();

const tasks = {
  tasks: [
    {
      text: "Grocerry Shopping",
      completed: true,
    },

    {
      text: "Clean yard",
      completed: false,
    },

    {
      text: "Film course",
      completed: false,
    },
  ],
  getTasksToDo() {
    return this.tasks.filter((task) => task.completed === false);
  },
};

console.log(tasks.getTasksToDo());

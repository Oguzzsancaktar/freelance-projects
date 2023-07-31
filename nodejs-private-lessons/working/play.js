const chalk = require('chalk')
const yargs = require('yargs')


// add
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log(chalk.bgGreen("Adding a new note !"));
  }
})

// remove 

yargs.command({
  command: "remove", 
  describe: "Remove a note",
  handler: function () {
    console.log(chalk.bgRed('Note removed !'));
  }
})


// read 
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log(chalk.bgBlue("Notes reading !"));
  }
})

// list 

yargs.command({
  command: "list",
  describe: "Notes listing",
  handler: function () {
    console.log(chalk.bgYellow("Notes listing !"));
  }
})

// console.log(process.argv);
console.log(yargs.argv);

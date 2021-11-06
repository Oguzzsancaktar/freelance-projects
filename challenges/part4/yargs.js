const chalk = require("chalk");
const yargs = require("yargs");

// add
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(chalk.bgGreen("Title" + argv.title));
    console.log(chalk.bgGreen("Title" + argv.body));
  },
});

// remove

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log(chalk.bgRed("Note removed !"));
  },
});

// read
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log(chalk.bgBlue("Notes reading !"));
  },
});

// list

yargs.command({
  command: "list",
  describe: "Notes listing",
  handler: function () {
    console.log(chalk.bgYellow("Notes listing !"));
  },
});

// console.log(process.argv);
// console.log(yargs.argv);

yargs.parse();

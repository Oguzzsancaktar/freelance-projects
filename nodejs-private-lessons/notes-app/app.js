const chalk = require("chalk");
const notes = require("./notes.js");
const validator = require("validator");
const yargs = require("yargs");

// const command = process.argv[2];
// if (command === "add") {
//   console.log(chalk.bgBlue.yellow('Note Added !'));
// } else if (command === "remove") {
//   console.log(chalk.bgRed('Note Removed !'))
// }

yargs.command({
  command: "add",
  describe: "Use for adding note",
  builder: {
    title: {
      describe: "Note Title",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "Note body",
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.version("1.1.0");

yargs.command({
  command: "remove",
  describe: "Remove note from notes",
  builder: {
    title: {
      describe: "Enter to removing title",
      demandOption: true,
      type: "string",
    },
  },
  
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command:"list",
  describe: "List notes",
  handler() {
    notes.listNote()    
  }
})

yargs.command({
  command: "read",
  describe: "read note",
  buidler: {
    title: {
      describe: "Note title",
      demandOption:true,
      type:"sting"
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

yargs.parse();

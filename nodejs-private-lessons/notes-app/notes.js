const chalk = require("chalk");
const fs = require("fs");

const getNotes = () => "Your notes...";

const addNote = (title, body) => {
  const notes = loadNotes();
  // const affected = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find(note => note.title === title)

  if (!duplicateNote) {
    
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("Note added !"));
  } else {
    console.log(chalk.bgRed("Note title taken !"));
  }
};


const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length === notes.length) {
    console.log(chalk.bgYellowBright("Note not found"));
  } else {
    saveNotes(notesToKeep);
    console.log(chalk.bgGreen(title + "removed"));
    // console.log(chalk.green.inverse(title + "removed"));
  }
};

const listNote = () => {
  const notes = loadNotes();

  console.log(chalk.blue.inverse('Notes Listing'));
  
  notes.forEach(note => {
    console.log(note.title);
  });
}

const readNote = (title)=>{
  const notes = loadNotes();

  const searchedNote = notes.find((note) => note.title === title)

  if (!searchedNote) {
    console.log(chalk.red.inverse("Note not found !"))
  } else (
    console.log(chalk.bgGray(searchedNote.body))
  )

}

const loadNotes = () =>  {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    const notes = JSON.parse(dataJSON);

    return notes;
  } catch (e) {
    return [];
  }
};


const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};


module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote,
  listNote,
  readNote,
};

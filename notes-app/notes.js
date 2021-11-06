const chalk = require("chalk");
const fs = require("fs");

const getNotes = function () {
  return "Your notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const affected = notes.filter(function (note) {
   return note.title === title; 
  });

  if (affected.length === 0) {
  notes.push({
    title: title,
    body: body,
  });
    
    saveNotes(notes);  
    console.log(chalk.bgGreen('Note added !'));
    
  } else {
    console.log(chalk.bgRed("Note title taken !"));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNote = function (title) {

  const notes = loadNotes();

  const duplicatedNotes = notes.filter(function (note) {
    return note.title !== title
  }) 

  if (duplicatedNotes.length === notes.length) {
    console.log(chalk.bgYellowBright("Note not found"));
  } else {

    saveNotes(duplicatedNotes)
    console.log(chalk.bgGreen(title + "removed"));
  }

}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    const notes = JSON.parse(dataJSON);

    return notes;
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote
};

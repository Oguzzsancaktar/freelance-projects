
const getNotes = require('./notes.js')
const validator = require('validator')



const msg = getNotes();
const isEmail = validator.isEmail('asdfas@gmail.com')

console.log(msg);
console.log(validator);



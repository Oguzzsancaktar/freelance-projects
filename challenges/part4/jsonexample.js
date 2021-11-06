const fs = require('fs');

// const person = {
//   name: "ahmet",
//   planet: "moon",
//   age:35
// }
// const jsonOBJ = JSON.stringify(person)
// fs.writeFileSync('1.json', jsonOBJ)


const dataBuffer = fs.readFileSync('1.json')
const dataJSON = dataBuffer.toString();
const person = JSON.parse(dataJSON);


person.name = "oguzz",
person.planet = "earth"
person.age = 21

const personJSON = JSON.stringify(person)

fs.writeFileSync("1.json", personJSON);


const person = {
  name: "oguz",
  age: 22,
  job: "doctor",
  mother: "  fattma",
  father: "murat",
  bro1: "selim1",
  bro2: "berat",
};

const { name: personName, age: personAge = 31 } = person;

console.log(personName, personAge);

const transaction = (type, { name:broname, job="muhendis" , bro1 ,bro2}) => {
  console.log(type, broname, job, bro1, bro2);
};

transaction("order", person);

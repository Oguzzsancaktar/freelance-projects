// Primitives 

let age: number;
age = 3

let userName: string | string[];
userName = 'taha'

let isHuman: boolean;
isHuman = true

let hobies: string[]
hobies = ['Swimming', 'Coding']

type Person = { name: string, age: number }

let person: Person;

person = {
  name: "taha",
  age: 22
}

// person={
//   isHuman:true
// }

let people: {
  name: string,
  age: number
}[];

people = [person, { name: "selim", age: 18 }]

// Type Inferance

let course: string | number = 'React course'
course = 12345134;

// generics 

function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
}

const demoArray = [1, 2, 3]

const updatedArray = insertAtBegining(demoArray, -1)
// updatedArray[0].split('')

const stringArray = insertAtBegining(['a', 'b', 'c'], 'd')
stringArray[0].split('')


// Classes

class Student {
  // fullName: string;
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];

  // constructor(
  //   first: string,
  //   last: string,
  //   age: number,
  //   courses: string[]) {
  //   this.firstName = first
  //   this.lastName = last
  //   this.age = age
  //   this.courses = courses
  //   this.firstName = first + last
  // }

  constructor(public fullname: string, public lastName: string, public age: number, private courses: string[]) {

  }

  enrol(courseName: string) {
    this.courses.push(courseName)
  }

  listCourses() {
    return this.courses.slice()
  }
}


const student = new Student('oguz', 'taha', 22, ['react'])
student.enrol('angular')

interface Human {
  firstName: string;
  age: number;

  greet: () => void
}


let max :Human;
max = {
  firstName: 'Max',
  age:22,
  greet: () => {
    console.log('Hello!')
  } 
}
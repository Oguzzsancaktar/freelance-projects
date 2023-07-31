// const square = function (x) {
//   return x * x
// }


// const square = (x) => {
//   return x * x
// }

// const square = (x) => x * x

const event = {
  name: "Birthday Party !",
  guesstList:["oguz", "Selim", "Berat"],
  printGuestList() {
    // const that = this;
    console.log("Guesst list for" + this.name);

    this.guesstList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    })

  }
}

event.printGuestList()
const socket = io()

// socket.on('countUpdated', (count)=> {
//   console.log("count updated ", count)
// })

// document.querySelector('#increment').addEventListener('click', () => {
//   console.log("Clicked Button");
//   socket.emit('increment')
// })

socket.on('welcome', (welcomeMessage) => {
  console.log(welcomeMessage);
})

document.querySelector('#messageForm').addEventListener('submit', (e) => {
  e.preventDefault()

  const message = e.target.elements.message.value
  socket.emit('sendMessage', message)
})
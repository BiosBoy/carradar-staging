const websocketsHelpers = () => ({
  sendData: (socket, name) => socket.send(JSON.stringify(name)),
  receiveData: (event) => JSON.parse(event.data)
})

export default websocketsHelpers

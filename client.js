const socket = io("http://localhost:2000")
socket.on("connect", data => {
    socket.emit("welcome", "hello server i'm front-end developer")
    socket.on("welcome-client", data => {
        console.log(data);
    })
})
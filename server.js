const http = require("http");
const server = http.createServer();
const socketIO = require("socket.io");
const io = socketIO(server, {
    cors:{
        origin: '*'
    }
})
io.on("connection", (socket) =>{
    socket.on("welcome", (data) =>{
        console.log(data);
    })
    socket.emit("welcome-client", "hello server i'm mern stack developer")
})
server.listen(2000, () => console.log("run on port 2000"))
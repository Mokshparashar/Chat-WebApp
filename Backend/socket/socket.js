// import {server} from 'socket.io';
// import http from 'http';
// import express from 'express'


// const app = Express();

// const server = http.createServer(app);
// const io = new server(server ,{
//     cors: {
//         origin: ["http://localhost:3000"],
//         methods: ["GET", "POST"],
//         credentials: true
//         }
// })

// io.on('connection' , (Socket) =>{
//     console.log("a user connected" , Socket.id)

//     //socket.on() is used to the events. can be used both on client and server side 
//     Socket.on("disconnect" , () =>{
//         console.log("a user disconnected" , Socket.id)
//     });
// });
// export {app, io , server};
import  Express  from "express";
import dotenv from  'dotenv';
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

import connectTOmongoDB from "./DataBase/connectTOmongoDB.js";
import protectRoute from "./middleware/protectRoute.js";
//import { app, server } from "./socket/socket.js";
// In your server file
import cors from 'cors';


dotenv.config();
const app = Express();

const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, // If you're using cookies or credentials
  }));
app.use(Express.json());
app.use(cookieParser());
app.use(protectRoute);
app.use("/api/customer" , authRoutes)
app.use("/api/messages" , messageRoutes)
app.use("/api/users" , userRoutes)


app.get( "/", ( req, res ) => {
    res.send("Hello World !!");
});

app.listen(PORT, () => {
    connectTOmongoDB();
    console.log(`Server is running on port ${PORT}`);
});
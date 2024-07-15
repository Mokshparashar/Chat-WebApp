import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectToMongoDB = async () => {
    try {
       // console.log("MongoDB URI:", process.env.MONGO_DB_URL);

        await mongoose.connect(process.env.MONGO_DB_URL, {
           
        });
        
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectToMongoDB;

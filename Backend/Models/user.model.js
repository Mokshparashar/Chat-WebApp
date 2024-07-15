import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required:true , unique:true },
  password: { type: String, required: true, minlength: 6 },
  gender: { type: String, required: true, enum: ["male", "female"] },
  profilePic: { type: String, required:true, default: " " },
} ,{timestamps:true});

const User = mongoose.model("User" , userSchema);
export default User;

// 1. fullName
// 2. username
// 3. password
// 4. gender
// 5. profilePic

// 6. createdAt
// 7. updatedAt
// 8. _id
// 9. __v
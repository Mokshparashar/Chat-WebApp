import User from "../Models/user.model.js";

export const getUsersForSidebar = async (req , res) =>{
    try {
        const loggedInUserId = req.user._id

        const filteredUser = await User.find({_id:{$ne:loggedInUserId}}).select("-password"); //can not find self to chat yourself and hide the password field from the users list

        res.status(200).json(filteredUser);
    } catch (error) {
        console.log("error in getUserSidebar:" ,error.message);
        res.status(500).json({error:"internal server error"});
    }
}
import bcrypt from "bcryptjs";
import User from "../Models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    // Validate input
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
      return res.status(400).json({ msg: 'All fields are required' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: 'Passwords do not match' });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({ msg: 'Username already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate profile picture URL based on gender
    const profilePic = gender === 'male'
      ? `https://avatar.iran.liara.run/public/boy?username=${userName}`
      : `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    // Create a new user
    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      profilePic,
      gender,
    });

    // Save the user to the database
    await newUser.save();

    // Generate a token and set it as a cookie or in local storage
    const token = generateTokenAndSetCookie(newUser._id, res);
//console.log(token);
    // Return the newly created user and the token
    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
      profilePic: newUser.profilePic,
      token,
    });
    
  } catch (error) {
    console.log('Error in signup controller', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};



export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);
    
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePicture: user.profilePic
    });

  } catch (error) {
    console.log("Error in login", error.message);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout", error.message);
    res.status(500).json({ msg: "Internal server error" });
  }
};

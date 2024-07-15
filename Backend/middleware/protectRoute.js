// import jwt from "jsonwebtoken";
// import User from "../Models/user.model.js";

// const protectRoute = async (req, res, next) => {
//   try {
//     const token = req.cookies.jwt;

//     if (!token) {
//       return res.status(401).json({ error: "You are not authorized to access this route" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (!decoded) {
//       return res.status(401).json({ error: "You are not authorized to access this route" });
//     }

//     const user = await User.findById(decoded.userId).select("-password");
//     if (!user) {
//       return res.status(401).json({ error: "You are not authorized to access this route" });
//     }
//     // const newUser = await user.insertOne()
//     // req.user = newUser;
//    req.user = user;
//     console.log(user);
//     next();
//   } catch (error) {
//     console.log("Error in ProtectRoute Middleware:", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
// export default protectRoute;



// import jwt from "jsonwebtoken";
// import User from "../Models/user.model.js";

// const protectRoute = async (req, res, next) => {
//   try {
//     const token = req.cookies.jwt;

//     // Skip authentication check for signup endpoint
//     if (req.originalUrl === '/api/customer/signup') {
//       return next();
//     }

//     if (!token) {
//       return res.status(401).json({ error: "You are not authorized to access this route" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (!decoded) {
//       return res.status(401).json({ error: "You are not authorized to access this route" });
//     }

//     const user = await User.findById(decoded.userId).select("-password");
//     if (!user) {
//       return res.status(401).json({ error: "You are not authorized to access this route" });
//     }

//     req.user = user; // Attach user object to request
//     next(); // Proceed to the next middleware
//   } catch (error) {
//     console.log("Error in protectRoute middleware:", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// export default protectRoute;


// import jwt from "jsonwebtoken";
// import User from "../Models/user.model.js";

// const protectRoute = async (req, res, next) => {
//   try {
//     const token = req.cookies.jwt;

//     // Skip authentication check for signup endpoint
//     if (req.originalUrl === '/api/customer/signup' && req.method === 'POST') {
//       return next();
//     }

//     if (!token) {
//       return res.status(401).json({ error: "You are not authorized to access this route" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (!decoded) {
//       return res.status(401).json({ error: "You are not authorized to access this route" });
//     }

//     const user = await User.findById(decoded.userId).select("-password");
//     if (!user) {
//       return res.status(401).json({ error: "You are not authorized to access this route" });
//     }

//     req.user = user; // Attach user object to request
//     next(); // Proceed to the next middleware
//   } catch (error) {
//     console.log("Error in protectRoute middleware:", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// export default protectRoute;


import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    // Skip authentication check for signup endpoint
    if (req.originalUrl === '/api/customer/signup' && req.method === 'POST') {
      return next();
    }

    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "You are not authorized to access this route" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "You are not authorized to access this route" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "You are not authorized to access this route" });
    }

    req.user = user; // Attach user object to request
    next(); // Proceed to the next middleware
  } catch (error) {
    console.log("Error in protectRoute middleware:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;



import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/usersModel.js";
import STATUS_CODE from "../constants/statusCode.js";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log("Token verification error: ", error);
      res.status(STATUS_CODE.FORBIDDEN);
      // throw new Error("You have to be logged in to do this action");
      res.send("You have to be logged in to do this action");
    }
  }

  if (!token) {
    res.status(STATUS_CODE.FORBIDDEN);
    throw new Error("You have to be logged in to do this action");
  }
});

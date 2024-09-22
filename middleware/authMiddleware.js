import JWT from "jsonwebtoken";

import userModel from "../models/userModel.js";

export const isLogin = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    req.user = decode;
    next();
  } catch (error) {
    return res.send({ message: "Unauthorized" });
  }
};

//admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);

    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access U r not the AdminDharma...!",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: error.message,
      error,
    });
  }
};

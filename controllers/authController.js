import userModel from "../models/userModel.js";
import nodemailer from "nodemailer";
import { hashPassword, comparePassword } from "../middleware/authHelper.js";

import JWT from "jsonwebtoken";
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send({
        success: false,
        message: "email and password both fields are required",
      });
    }
    const user = await userModel.findOne({ email });
    if (user) {
     
      const matched = await comparePassword(password, user.password);
      const AccessToken = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1y",
      });

      if (!matched) {
        return res.send({
          success: false,
          message: "invalide passwod please try...! Again ",
        });
      }

      return res.send({
        success: true,
        message: "Login successfully",
        user,
        AccessToken,
      });
    }
    if (!user) {
      return res.send({ success: false, message: "User Not Registered..!" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "internal server issue", error });
  }
};

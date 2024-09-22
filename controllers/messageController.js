import ContactModel from "../models/contactModel.js";
import nodemailer from "nodemailer";
export const createMessageController = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
      return res.status(400).send("All fields are required");
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    const newContact = new ContactModel({
      name,
      phone,
      email,
      message,
    });

    await newContact.save();
    const subject = "Contact mail from SD Cranes";
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    let info = await transporter.sendMail({
      from: `SD Cranes <manasvistaff.dharma@gmail.com>`,
      to: email,
      subject: subject,
      text: message,
    });
    let info1 = await transporter.sendMail({
      from: `SD Cranes <manasvistaff.dharma@gmail.com>`,
      to: "dprajapati15302@gmail.com",
      subject: subject,
      text: message,
    });

    res.status(201).send("Contact form submitted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error. Please try again later.");
  }
};

export const getMessageController = async (req, res) => {
  try {
    const contacts = await ContactModel.find().sort({ createdAt: -1 });

    res.status(200).send(contacts);
  } catch (error) {
    res.status(500).send("Server error. Unable to fetch contacts.");
  }
};

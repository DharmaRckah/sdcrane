import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const navigate = useNavigate(); // Initialize navigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/v1/contact/createContact",
        formData
      );
      if (response.status === 201) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setTimeout(() => {
          window.location.reload();
          navigate("/"); // Navigate to the home page after success
        }, 2000); // Optional delay to allow the user to see the success message
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleCancel = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-red-500 to-blue-500 px-3 from-green-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ">
      <ToastContainer />
      <div
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
        data-aos="zoom-in-right"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600">We'd love to hear from you!</p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4 relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="pl-4 py-2 w-full border rounded-lg focus:ring focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4 relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="pl-4 py-2 w-full border rounded-lg focus:ring focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4 relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="pl-4 py-2 w-full border rounded-lg focus:ring focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Message */}
          <div className="mb-4 relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="pl-4 py-2 w-full border rounded-lg focus:ring focus:outline-none focus:border-blue-400"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            {/* Cancel Button */}
            <button
              type="button"
              onClick={handleCancel}
              className="w-1/2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 ml-2"
            >
              Cancel
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 ml-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

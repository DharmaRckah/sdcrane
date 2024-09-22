import React, { useEffect, useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/Auth"; // Assuming you have a custom Auth context
import Loader from "../utils/LoaderC";

const Login = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth(); // Using custom auth context
  const [dauth] = useAuth(); // Access current authentication context

  useEffect(() => {
    // Only check if the user's role is 1
    if (dauth?.user?.role === 1) {
      navigate("/admin");
    }
  }, [dauth, navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // Manage loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/v1/auth/login", formData);

      if (response.data.success) {
        toast.success(response.data.message);

        // Set auth context with user and token data
        setAuth({
          ...auth,
          user: response.data.user,
          AccessToken: response.data.AccessToken,
        });

        // Store authentication data in session storage
        sessionStorage.setItem("dauth", JSON.stringify(response.data));

        // Immediately navigate to /admin if the user's role is 1
        if (response.data.user.role === 1) {
          navigate("/admin");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading indicator after request
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 px-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ">
      <div
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
        data-aos="zoom-in-right"
      >
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Welcome!</h2>
              <p className="text-gray-600">Sign in to your account</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 relative">
                <span className="absolute left-3 top-3 text-gray-500">
                  <FaUserAlt />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="pl-10 py-2 w-full border rounded-lg focus:ring focus:outline-none focus:border-blue-400"
                  value={formData.email}
                  onChange={handleChange}
                  // required
                />
              </div>
              <div className="mb-6 relative">
                <span className="absolute left-3 top-3 text-gray-500">
                  <FaLock />
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="pl-10 py-2 w-full border rounded-lg focus:ring focus:outline-none focus:border-blue-400"
                  value={formData.password}
                  onChange={handleChange}
                  // required
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="w-1/2 mr-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white py-2 rounded-lg hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 ml-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 "
                  disabled={loading}
                >
                  Sign In
                </button>
              </div>
            </form>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

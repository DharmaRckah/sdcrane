import React from "react";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/"); // Navigate to the home or login page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md">
        {/* Red Warning Message */}
        <h1 className="text-4xl font-bold text-red-700 mb-4">Access Denied</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Error 401 - Unauthorized
        </h2>
        <p className="text-gray-600 mb-6">
          You don't have the necessary permissions to access this page.
        </p>
        <button
          onClick={handleRedirect}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default Test;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./pages/context/Auth";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
AOS.init({
  duration: 1200, 
  once: true, 
});

root.render(
  <AuthProvider>
    <App />
    <ToastContainer/>
  </AuthProvider>
);

reportWebVitals();

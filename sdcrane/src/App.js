import "semantic-ui-css/semantic.min.css";

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Sidebar from "./pages/admin/Sidebar";
import AdminRoute from "./pages/admin/AdminRoute";
import { ProtectedRoutes } from "./pages/auth/ProtectedRoutes";
import Test from "./pages/auth/Test";
import Login from "./pages/auth/Login";
import ContactForm from "./pages/auth/ContactForm";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/c" element={<ContactForm />} />
        <Route path="/admin/*" element={<ProtectedRoutes />}>
          <Route path="*" element={<AdminRoute />} />
        </Route>
        <Route path="/*" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;

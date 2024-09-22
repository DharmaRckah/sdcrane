import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Test from "../auth/Test.js";
import { useAuth } from "../../pages/context/Auth.js";
import Sidebarr from "./Sidebar.js";
import Product from "./Product.jsx";
import Logout from "../auth/Logout.js";
import Contact from "./Contact.jsx";

const AdminRoute = () => {
  const [auth] = useAuth();
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Sidebarr visible={sidebarVisible} onToggle={toggleSidebar}>
      {/* Main content passed as children */}
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/log-out" element={<Logout />} />
        <Route path="/*" element={<Test />} />
      </Routes>
    </Sidebarr>
  );
};

export default AdminRoute;

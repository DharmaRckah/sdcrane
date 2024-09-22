import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("lgo")
    sessionStorage.removeItem("dauth");

    // Redirect to the root path after logout
    
    navigate("/", { replace: true });
window.location.reload();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;

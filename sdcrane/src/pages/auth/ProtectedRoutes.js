import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth.js";
import axios from "axios";
import Loader from "../utils/Loader.js";

export const ProtectedRoutes = () => {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(true);
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const response = await axios.get("/api/v1/auth/admin-auth");

        if (response.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error during authentication check", error);
        setOk(false);
      } finally {
        setLoading(false);
      }
    };

    if (auth?.AccessToken) {
      authCheck();
    } else {
      setOk(false);
      setLoading(false);
    }
  }, [auth]);

  useEffect(() => {
    if (!loading && !ok) {
      const timeout = setTimeout(() => {
        navigate("/access-denied");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [loading, ok, navigate]);

  if (loading || !ok) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="w-16 h-16" />
      </div>
    );
  }

  return ok ? <Outlet /> : null;
};

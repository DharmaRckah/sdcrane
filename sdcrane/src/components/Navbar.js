



import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/logo.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "@fontsource/roboto-condensed";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate(); // Hook to navigate programmatically
  const navItems = [
    "Home",
    "Products",
    "Quality Policy",
    "About",
    "Contact Us",
    "login",
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the /login route
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "start" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={item === "login" ? "button" : Link} // Conditional rendering for login
              to={
                item === "login" ? null : item.toLowerCase().replace(/\s/g, "")
              }
              smooth={item !== "login"} // Enable smooth scroll only for non-login items
              duration={500}
              onClick={item === "login" ? handleLoginClick : handleDrawerToggle}
              sx={{
                textAlign: "center",
                fontFamily: "Roboto Condensed",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#000",
                position: "relative",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  color: "#ff8225",
                  "&::after": {
                    width: "100%",
                  },
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "0%",
                  height: "2px",
                  backgroundColor: "#000",
                  transition: "width 0.3s ease-in-out",
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider
      theme={createTheme({ typography: { fontFamily: "Roboto Condensed" } })}
    >
      {/* AppBar for larger screens */}
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#ff8225",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: { xs: "none", md: "flex" }, // Show AppBar on screens wider than 768px
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "center",
            height: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component={Link}
              to="home"
              smooth={true}
              duration={500}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#040080",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                },
                mx: { xs: 0, md: 2 },
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ width: 120, height: "auto" }}
              />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  component={item === "login" ? "button" : Link}
                  to={
                    item === "login"
                      ? null
                      : item.toLowerCase().replace(/\s/g, "")
                  }
                  smooth={item !== "login"} // Smooth scroll for all except login
                  duration={500}
                  onClick={item === "login" ? handleLoginClick : null}
                  sx={{
                    color: "white",
                    fontSize: "1.2rem",
                    fontFamily: "Roboto Condensed",
                    fontWeight: "bold",
                    position: "relative",
                    ml: 6,
                    "&:hover": {
                      color: "#ff8225",
                      backgroundColor: "white",
                      "&::after": {
                        width: "100%",
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "0%",
                      height: "2px",
                      backgroundColor: "red",
                      transition: "width 0.3s ease-in-out",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile view header */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" }, // Show only on mobile screens
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          backgroundColor: "#ff8225",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          component={Link}
          to="home"
          smooth={true}
          duration={500}
          sx={{
            cursor: "pointer",
            mx: 2,
            "&:hover": {
              color: "#040080",
            },
          }}
        >
          <img src={logo} alt="Logo" style={{ width: 100, height: "auto" }} />
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            color: "#000",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="right" // Position the Drawer at the right
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "auto", // Use only the width of the content
            maxWidth: "300px", // Maximum width for the Drawer
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>
    </ThemeProvider>
  );
};

export default Navbar;

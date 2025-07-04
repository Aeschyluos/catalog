import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import ThemeToggleButton from "./ThemeToggleButton";
import logoImage from "../assets/logo.png";

function Navbar({ isScrolled }) {
  const buttonStyle = {
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "gray",
    },
    "&:active": {
      color: "darkgray",
    },
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        transition: "background-color 0.5s ease, box-shadow 0.5s ease",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        boxShadow: isScrolled ? "0 4px 12px rgba(0,0,0,1)" : "none",
        zIndex: 1100,
        width: "100%",
        height: "11%",
        paddingTop: "1rem",
        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
      }}
    >
      <Toolbar className="max-w-7xl mx-auto w-full flex justify-center items-center px-4 md:px-8 relative">
        <Box className="flex space-x-24 absolute left-4 md:left-8">
          <Link to="/shop" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              fontSize={{ xs: "1rem", md: "1.2rem" }}
              className="mb-3 cursor-pointer hover:text-gray-500 transition-colors active:text-gray-600"
            >
              Shop
            </Typography>
          </Link>
          <Typography
            fontSize={{ xs: "1rem", md: "1.2rem" }}
            className="mb-3 cursor-pointer hover:text-gray-500 transition-colors active:text-gray-600"
          >
            About
          </Typography>
        </Box>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="h3"
            component="div"
            fontFamily="Lacquer"
            className="mb-3 cursor-pointer hover:text-gray-500 transition-colors active:text-gray-600"
          >
            GOTHLIAT
          </Typography>
        </Link>
        <Box className="flex items-center space-x-8 absolute right-4 md:right-8">
          <Typography
            fontSize={{ xs: "1rem", md: "1.2rem" }}
            className="mb-3 cursor-pointer hover:text-gray-500 transition-colors active:text-gray-600"
          >
            Help
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

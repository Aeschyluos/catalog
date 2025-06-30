import React, { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import ThemeToggleButton from "./ThemeToggleButton";

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
        transition: "background-color 0.5s ease",
        backgroundColor: "transparent",
        boxShadow: isScrolled ? "0 4px 12px rgba(0,0,0,0.3)" : "none",
        zIndex: 1100,
        width: "100%",
        height: "10%",
        paddingTop: "1rem",
      }}
    >
      <Toolbar className="flex justify-center items-center space-x-120">
        <Typography
          variant="h3"
          component="div"
          sx={{ fontFamily: "Lacquer, sans-serif" }}
        >
          UNTITLED
        </Typography>

        <Box className="flex space-x-24">
          <Typography fontSize="1.4rem" sx={buttonStyle}>
            Shop
          </Typography>
          <Typography fontSize="1.4rem" sx={buttonStyle}>
            About
          </Typography>
        </Box>
        <Box className="flex items-center space-x-8">
          <Typography fontSize="1.4rem" sx={buttonStyle}>
            Help
          </Typography>
          <ThemeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

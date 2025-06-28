import React, { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import ThemeToggleButton from "./ThemeToggleButton";

function Navbar({ isScrolled }) {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        transition: "background-color 0.5s ease",
        backgroundColor: isScrolled ? "rgba(21, 21, 21, 0.7)" : "transparent",
        boxShadow: isScrolled ? 1 : "none",
        width: "100%",
        zIndex: 1100,
      }}
    >
      <Toolbar className="flex justify-between">
        <Typography
          variant="h3"
          component="div"
          sx={{ fontFamily: "Lacquer, sans-serif" }}
        >
          UNTITLED
        </Typography>
        <div className="flex items-center space-x-4">
          <Button>Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">About</Button>
          <ThemeToggleButton />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

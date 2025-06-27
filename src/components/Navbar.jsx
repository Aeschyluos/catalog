import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import ThemeToggleButton from "./ThemeToggleButton";

function Navbar() {
  return (
    <AppBar position="static" color="primary">
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

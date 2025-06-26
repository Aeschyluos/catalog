import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import ThemeToggleButton from "./ThemeToggleButton";

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar className="flex justify-between">
        <div className="flex items-center">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className="mr-2"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Catalog Store
          </Typography>
        </div>

        <div className="flex items-center space-x-4">
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">About</Button>
          <ThemeToggleButton />
          {/* <Button color="inherit" onClick={toggleTheme}>
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </Button> */}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

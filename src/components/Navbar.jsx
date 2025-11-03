import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";

import CartDropdown from "./CartDropdown";
import { ShoppingCartOutlined } from "@mui/icons-material";

function Navbar({ isScrolled }) {
  const [cartOpen, setCartOpen] = useState(false);
  const cartButtonRef = useRef(null);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        transition: "background-color 0.5s ease, box-shadow 0.5s ease",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        boxShadow: isScrolled ? "0 4px 8px rgba(0,0,0,1)" : "none",
        zIndex: 10,
        left: 0,
        height: "85px",
        paddingTop: "1rem",

        "&:hover": { backgroundColor: "rgba(0, 0, 0, 1)" },
      }}
    >
      <Toolbar className="max-w-7xl mx-auto w-full flex justify-center items-center ">
        <Box className="flex space-x-24 absolute left-4 md:left-8">
          <Link to="/shop" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              fontSize={{ xs: "1rem", md: "1.2rem" }}
              className="mb-3 cursor-pointer hover:text-gray-500 transition-colors active:text-gray-600"
            >
              Shop
            </Typography>
          </Link>
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
          <IconButton
            ref={cartButtonRef}
            onClick={() => setCartOpen((prev) => !prev)}
            className="p-2 text-white rounded"
            disableRipple
            disableFocusRipple
            sx={{
              marginBottom: "10%",
            }}
          >
            <ShoppingCartOutlined
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  color: "gray",
                },
                transition: "color 0.3s ease",
              }}
            />
          </IconButton>
          {cartOpen && (
            <CartDropdown
              anchorEl={cartButtonRef.current}
              open={cartOpen}
              onClose={() => setCartOpen(false)}
            />
          )}
          {/* <Typography
            fontSize={{ xs: "1rem", md: "1.2rem" }}
            className="mb-3 cursor-pointer hover:text-gray-500 transition-colors active:text-gray-600"
          >
            Help
          </Typography> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

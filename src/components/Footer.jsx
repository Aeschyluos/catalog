import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer className="w-full flex justify-between items-center px-8 py-4 text-white bg-black">
      <Typography className="mb-3 cursor-pointer hover:text-gray-500 transition-colors active:text-gray-600">
        SOCIALS
      </Typography>
      <span>© 2025 GOTHLIAT</span>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer>
      <Box
        className="flex justify-between items-center px-8 py-4 "
        sx={{
          transition: "background-color 0.5s ease",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 10,

          "&:hover": { backgroundColor: "rgba(0, 0, 0, 1)" },
        }}
      >
        <Typography className="mb-3 cursor-pointer hover:text-gray-500 transition-colors active:text-gray-600">
          <InstagramIcon
            onClick={() =>
              window.open("https://www.instagram.com/gothliat/", "_blank")
            }
            rel="noopener"
          />
        </Typography>
        <span>© 2025 GOTHLIAT</span>
      </Box>
    </footer>
  );
}

export default Footer;

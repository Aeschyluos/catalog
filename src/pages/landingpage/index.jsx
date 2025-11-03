import React from "react";
import { Box, Button, Typography } from "@mui/material";

import LazyImage from "../../components/LazyImage";
import landingImage from "../../assets/landingImage.jpg";
import landingImage2 from "../../assets/landingImage2.jpg";
import landingImage3 from "../../assets/landingImage3.jpg";
import logoImage from "../../assets/logoImage.png";

function LandingPage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -5,
        }}
      >
        <LazyImage
          src={landingImage}
          alt="Landing Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(3px)",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            textAlign: "center",

            maxWidth: 720,
            width: "100%",
          }}
        >
          <LazyImage
            src={logoImage}
            alt="Logo"
            style={{
              filter: "invert(1)",
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;

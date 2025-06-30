import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Box, CircularProgress } from "@mui/material";

import Footer from "../../components/Footer";
import landingImage from "../../assets/landingImage.jpg";
import landingImage2 from "../../assets/landingImage2.jpg";

function LandingPage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = landingImage;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  return (
    <div>
      <Box
        padding="1rem"
        minHeight="2000px"
        sx={{
          backgroundImage: isImageLoaded ? `url(${landingImage2})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isImageLoaded ? (
          <Box color="white" fontSize="2rem">
            Lorem Ipsum
          </Box>
        ) : (
          <CircularProgress color="inherit" />
        )}
      </Box>
      <Footer />
    </div>
  );
}

export default LandingPage;

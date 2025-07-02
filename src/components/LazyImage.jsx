import React, { useState, useRef, useEffect } from "react";
import { CircularProgress, Box } from "@mui/material";

function LazyImage({ src, alt, style }) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "100px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={imgRef}
      position="relative"
      width="100%"
      height="100%"
      minHeight="200px"
    >
      {!isLoaded && isInView && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={1}
        >
          <CircularProgress color="inherit" />
        </Box>
      )}

      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{
            ...style,
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in",
          }}
        />
      )}
    </Box>
  );
}

export default LazyImage;

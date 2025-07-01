import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const categories = [
  "New Arrivals",
  "Sale",
  "T-shirt",
  "Sweater",
  "Long Shirts",
  "Shirts",
  "Outerwear",
  "Pants",
  "Headwear",
  "Jewelry",
];

function Categories() {
  return (
    <Box>
      <Typography variant="h6" className="mb-4">
        KATEGORI
      </Typography>
      <Divider className="mb-4" />

      {categories.map((category, index) => (
        <Typography
          key={index}
          fontSize="1rem"
          className="mb-3 cursor-pointer hover:text-gray-500 transition-colors"
        >
          {category}
        </Typography>
      ))}
    </Box>
  );
}

export default Categories;

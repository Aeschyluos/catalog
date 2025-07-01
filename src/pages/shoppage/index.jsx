import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Categories";

const products = [
  // Sample products, replace with API call later
  {
    id: 1,
    name: "Pants Leonia Rose Black",
    brand: "Thanksinsomnia",
    image: "/assets/product1.jpg",
  },
  {
    id: 2,
    name: "Pants Leonia Code Black",
    brand: "Thanksinsomnia",
    image: "/assets/product2.jpg",
  },
  {
    id: 3,
    name: "Denim Pants Vivianne Raw Black",
    brand: "Thanksinsomnia",
    image: "/assets/product3.jpg",
  },
  {
    id: 4,
    name: "Long Shirt Tessa Western Beige",
    brand: "Thanksinsomnia",
    image: "/assets/product4.jpg",
  },
];

function ShopPage() {
  return (
    <Box className="max-w-7xl mx-auto p-4 md:p-8">
      <Box
        position="relative"
        width="100%"
        height="100%"
        minHeight="10vh"
      ></Box>
      <Box className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <Box className="w-full md:w-1/4">
          <Categories />
        </Box>

        {/* Product Section */}
        <Box className="flex-1">
          {/* Breadcrumb */}
          <Typography fontSize="0.9rem" className="text-gray-500 mb-2">
            Home &gt; Collection
          </Typography>

          {/* Page Title */}
          <Typography variant="h3" className="mb-6">
            Collection
          </Typography>

          {/* Product Grid */}
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default ShopPage;

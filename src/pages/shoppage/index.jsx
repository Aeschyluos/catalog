import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Grid } from "@mui/material";

import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Categories";
// import product1 from "../../assets/product1.png";

// const products = [
//   // Sample products, replace with API call later
//   {
//     id: 1,
//     name: "Pants Leonia Rose Black",
//     brand: "Thanksinsomnia",
//     image: "../../assets/product1.png",
//   },
//   {
//     id: 2,
//     name: "Pants Leonia Code Black",
//     brand: "Thanksinsomnia",
//     image: "/assets/product2.jpg",
//   },
//   {
//     id: 3,
//     name: "Denim Pants Vivianne Raw Black",
//     brand: "Thanksinsomnia",
//     image: "/assets/product3.jpg",
//   },
//   {
//     id: 4,
//     name: "Long Shirt Tessa Western Beige",
//     brand: "Thanksinsomnia",
//     image: "/assets/product4.jpg",
//   },
// ];

function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box className="max-w-7xl mx-auto p-4 md:p-8">
      <Box
        position="relative"
        width="100%"
        height="100%"
        minHeight="10vh"
      ></Box>
      <Box className="flex flex-col md:flex-row gap-8">
        <Box className="w-full md:w-1/4">
          <Categories />
        </Box>

        {/* Product Section */}
        <Box className="flex-1">
          {/* Breadcrumb */}
          <Typography fontSize="0.9rem" className="text-gray-500 mb-2">
            New
          </Typography>

          {/* Page Title */}
          <Typography variant="h3" className="mb-6">
            Collection
          </Typography>

          {/* Product Grid */}
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id}>
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

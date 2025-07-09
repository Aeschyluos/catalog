import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Grid, CircularProgress, Button } from "@mui/material";

import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Categories";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (err) {
      setError("Server is down.");
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
        {/* <Box className="w-full md:w-1/4">
          <Categories />
        </Box> */}

        <Box className="flex-1">
          <Typography variant="h3" marginTop="1rem" marginBottom="1.5rem">
            Most Recent
          </Typography>

          {loading && (
            <Box className="flex justify-center items-center" marginTop="10rem">
              <CircularProgress sx={{ color: "white" }} />
            </Box>
          )}

          {error && (
            <Box
              className="flex flex-col items-center space-y-4"
              marginTop="9rem"
            >
              <Typography color="error">{error}</Typography>

              <Button
                onClick={fetchProducts}
                variant="contained"
                sx={{
                  backgroundColor: "gray",
                  "&:hover": { backgroundColor: "lightgray" },
                }}
              >
                RETRY
              </Button>
            </Box>
          )}

          {!loading && !error && (
            <>
              {products && products.length > 0 ? (
                <Grid container spacing={4}>
                  {products.map((product) => (
                    <Grid item key={product.id}>
                      <ProductCard product={product} />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography
                  className="flex justify-center items-center"
                  marginTop="10rem"
                  variant="h6"
                >
                  Looks like we're out. . .
                </Typography>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ShopPage;

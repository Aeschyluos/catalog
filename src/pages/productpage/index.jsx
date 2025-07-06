import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  CircularProgress,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LazyImage from "../../components/LazyImage";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <CircularProgress />;

  if (!product) return <Typography>Product not found</Typography>;

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
    // TODO: Add to cart functionality
  };

  return (
    <Box className="max-w-7xl mx-auto p-4 md:p-8">
      <Box height="10vh"></Box>
      {/* Back Button */}
      <IconButton onClick={() => navigate(-1)} className="mb-4">
        <ArrowBackIcon />
      </IconButton>

      {/* Layout: Image Left - Details Right */}
      <Box className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <Box className="md:w-1/2 w-full">
          <LazyImage
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Product Details */}
        <Box className="flex-1" sx={{ paddingLeft: "10rem" }}>
          <Typography variant="h3" className="mb-4">
            {product.name}
          </Typography>
          <Typography variant="h5" color="text.secondary" className="mb-2">
            {product.brand}
          </Typography>
          <Typography variant="body1" className="mb-4">
            {product.description}
          </Typography>
          <Typography variant="h6" className="mb-4">
            ${product.price}
          </Typography>

          {/* Quantity and Add to Cart */}
          <Box className="flex items-center gap-4 mb-4">
            <TextField
              type="number"
              label="Quantity"
              value={quantity}
              onChange={handleQuantityChange}
              inputProps={{ min: 1 }}
              size="small"
              sx={{ width: "100px" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductPage;

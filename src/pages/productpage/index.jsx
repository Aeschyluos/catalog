import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  CircularProgress,
  Button,
  IconButton,
} from "@mui/material";
import { Add, Remove, ArrowBack } from "@mui/icons-material";
import LazyImage from "../../components/LazyImage";
import { useCart } from "../../context/CartContext";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

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

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increase") {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <Box className="min-h-screen max-w-7xl mx-auto p-4 md:p-8 flex flex-col">
      <Box
        position="relative"
        width="100%"
        height="100%"
        minHeight="10vh"
      ></Box>

      <Box className="flex flex-col md:flex-row justify-center items-center gap-32">
        <Box className="md:w-[400px] w-full">
          <Box className="mb-4">
            <IconButton
              onClick={() => navigate(-1)}
              sx={{
                width: "40px",
                height: "40px",
              }}
            >
              <ArrowBack />
            </IconButton>
          </Box>
          <LazyImage
            src={product.imageUrl}
            alt={product.name}
            style={{
              width: "100%",
              maxHeight: "500px",
              objectFit: "contain",
            }}
          />
        </Box>

        <Box className="flex flex-col max-w-md w-full h-full justify-between">
          <Box marginBottom="14rem">
            <Typography
              variant="h3"
              className="font-bold"
              sx={{ marginBottom: "1rem" }}
            >
              {product.name}
            </Typography>

            <Typography
              variant="h6"
              className="font-semibold"
              sx={{ mb: "2rem" }}
            >
              Rp {product.price.toLocaleString("id-ID")}
            </Typography>

            <Typography variant="body1">{product.description}</Typography>
          </Box>

          <Box className="flex items-center gap-4">
            <Box className="flex items-center border rounded px-2 py-1">
              <IconButton
                onClick={() => handleQuantityChange("decrease")}
                size="small"
              >
                <Remove />
              </IconButton>
              <Typography className="mx-2">{quantity}</Typography>
              <IconButton
                onClick={() => handleQuantityChange("increase")}
                size="small"
              >
                <Add />
              </IconButton>
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                px: 4,
                py: 1.5,
                "&:hover": { backgroundColor: "#333" },
              }}
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductPage;

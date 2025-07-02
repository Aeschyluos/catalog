import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import LazyImage from "./LazyImage";

function ProductCard({ product }) {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow">
      <CardMedia
        component="img"
        height="300"
        image={<LazyImage src={product.imageUrl} alt="Product Image" />}
        // image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body1">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

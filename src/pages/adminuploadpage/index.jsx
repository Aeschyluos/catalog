import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, Typography } from "@mui/material";

function AdminUploadPage() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    description: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) return setUploadStatus("Please select an image.");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("brand", formData.brand);
    data.append("category", formData.category);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("image", selectedImage);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/products/add",
        data
      );
      console.log("Product Uploaded:", response.data);
      setUploadStatus("Upload Successful!");

      // Reset form
      setFormData({
        name: "",
        brand: "",
        category: "",
        price: "",
        description: "",
      });
      setSelectedImage(null);
      setPreviewImage(null);
    } catch (error) {
      console.error("Upload Failed:", error);
      setUploadStatus("Upload Failed. Please try again.");
    }
  };

  return (
    <Box className="max-w-xl mx-auto p-4 md:p-8">
        <Box
              position="relative"
              width="100%"
              height="100%"
              minHeight="10vh"
            ></Box>
      <Typography variant="h4" className="mb-6">
        Admin Product Upload
      </Typography>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          fullWidth
          label="Product Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          multiline
          rows={3}
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        {previewImage && (
          <Box className="mt-4">
            <Typography>Image Preview:</Typography>
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-xs max-h-64 mt-2"
            />
          </Box>
        )}
        <Button variant="contained" color="primary" type="submit">
          Upload Product
        </Button>
      </form>

      {uploadStatus && <Typography className="mt-4">{uploadStatus}</Typography>}
    </Box>
  );
}

export default AdminUploadPage;

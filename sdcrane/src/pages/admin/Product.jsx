import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    photo: null,
  });
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/v1/product/all");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products", error);
      toast.error("Failed to fetch products");
    }
  };

  const handleOpenDialog = (product = null) => {
    setProductToEdit(product);
    setIsUpdate(!!product);
    setFormValues({
      name: product?.name || "",
      description: product?.description || "",
      photo: null,
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setProductToEdit(null);
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("description", formValues.description);
    if (formValues.photo) formData.append("photo", formValues.photo);

    try {
      let response;
      if (isUpdate) {
        response = await axios.put(
          `/api/v1/product/update/${productToEdit._id}`,
          formData
        );
        toast.success(response.data.message || "Product updated successfully");
      } else {
        response = await axios.post("/api/v1/product/create", formData);
        toast.success(response.data.message || "Product added successfully");
      }
      fetchProducts(); // Fetch updated products
      handleCloseDialog();
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Failed to submit form");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/product/delete/${id}`);
      toast.success(response.data.message || "Product deleted successfully");
      fetchProducts(); // Fetch updated products
    } catch (error) {
      console.error("Error deleting product", error);
      toast.error("Failed to delete product");
    }
  };

  return (
    <div data-aos="fade-right">
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenDialog()}
        sx={{ mb: 2 }}
      >
        Add Product
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>
                  {product.photo && (
                    <img
                      src={`uploads/${product.photo}`}
                      alt={product.name}
                      style={{ width: 50, height: 50 }}
                    />
                  )}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenDialog(product)}
                    sx={{ mr: 2 }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this product?"
                        )
                      ) {
                        handleDelete(product._id);
                      }
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Modal for adding and updating products */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{isUpdate ? "Update Product" : "Add Product"}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: 2,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              <TextField
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleFormChange}
                fullWidth
                required
              />
              <TextField
                label="Description"
                name="description"
                value={formValues.description}
                onChange={handleFormChange}
                fullWidth
                required
              />
              <input
                type="file"
                name="photo"
                onChange={handleFormChange}
                accept="image/*"
                style={{ marginTop: 16 }}
              />
              <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  {isUpdate ? "Update" : "Add"}
                </Button>
              </DialogActions>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Product;

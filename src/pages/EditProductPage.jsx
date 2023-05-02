import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";

function EditProductPage() {
  const { oneProduct, getOneProduct, editProduct } = useProductContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setFormValue(oneProduct);
    }
  }, [oneProduct]);
  function handleChange(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.price.trim() ||
      !formValue.category.trim() ||
      !formValue.image.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    editProduct(id, formValue);

    setFormValue({
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
    });
    navigate(-1);
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Edit Product</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          maxWidth: "500px",
          margin: "0 auto",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TextField
          value={formValue.title}
          name="title"
          label="Title"
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          value={formValue.description}
          name="description"
          label="description"
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          value={formValue.price}
          name="price"
          label="Price"
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          value={formValue.category}
          name="category"
          label="Category"
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          value={formValue.image}
          name="image"
          label="Image"
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit" variant="contained">
          Save
        </Button>
      </form>
    </div>
  );
}

export default EditProductPage;

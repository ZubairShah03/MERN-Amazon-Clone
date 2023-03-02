const express = require("express");
const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
    image: {
      type: String,
      required: true
    }
});

//creating a new collection
const ProductDetails = new mongoose.model("ProductDetails", productsSchema);

//exporting
module.exports = ProductDetails;

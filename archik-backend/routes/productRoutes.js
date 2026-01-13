import express from "express";
import Product from "../models/Product.js";

import { getProducts } from "../controllers/productController.js";


const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find(); // fetch all products
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

export default router;

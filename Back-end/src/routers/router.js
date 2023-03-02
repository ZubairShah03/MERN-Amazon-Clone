const express = require("express");
const cors = require("cors");
const router = new express.Router();

const ProductDetails = require("../models/schema");

router.use(cors());

//handling post request for create
router.post("/productDetails", async (req, res) => {
  try {
    const addingMensRecord = new ProductDetails(req.body);
    console.log(req.body);
    const insertMens = await addingMensRecord.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling get request for read or show api
router.get("/productDetails", async (req, res) => {
  try {
    const getMens = await ProductDetails.find({});
    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling delete request for delete
router.delete("/productDetails/:id", async (req, res) => {
    try {
      const getMens = await ProductDetails.findByIdAndDelete(req.params.id);
      res.send(getMens);
    } catch (e) {
      res.status(500).send(e);
    }
  });

module.exports = router;

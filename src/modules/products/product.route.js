const express = require('express');
const router = express.Router();
const productsController = require('./product.controller');
const { validateData } = require("../../core/middlewares/middleware.zod");
const { productSchema } = require("./product.schema");

router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProductById);
// router.post('/products', productsController.createProduct);
router.post('/products', validateData(productSchema), productsController.createProductZod);

module.exports = router;

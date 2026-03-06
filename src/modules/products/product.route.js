const express = require('express');
const router = express.Router();
const productsController = require('./product.controller');
const { validateData } = require("../../core/middlewares/middleware.zod");
const { productSchema } = require("./product.schema");

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: routes de base des products
 *
 */

router.get('/products', productsController.getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Récupère un produit par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produit trouvé
 *       404:
 *         description: Produit introuvable
 */

router.get('/products/:id', productsController.getProductById);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Crée un produit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Produit créé
 *       400:
 *         description: Données invalides
 */

router.post('/products', validateData(productSchema), productsController.createProduct);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);

module.exports = router;

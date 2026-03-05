const productsService = require('./product.service');

let count = 0;
const max = 100;
const getAllProducts = async (req, res) => {
    try {
        count++
        const name = req.query.name
        const products = await productsService.getAllProducts(name);
        res.setHeader('X-RateLimit-Limit', max);
        res.setHeader('X-RateLimit-Remaining', max - count);
        res.setHeader('Cache-Control', 'public, max-age=600, must-revalidate');
        if (count > max) {
            return res.status(429).json({ error: 'Trop de requêtes' });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await productsService.getProductById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
};

const createProduct = async (req, res) => {
    try {
        const newProduct = await productsService.createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
};

const updateProduct = async (req, res) => {
    try {
        const updated = await productsService.updateProduct(req.params.id, req.body);
        res.status(200).json(updated);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        await productsService.deleteProduct(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}

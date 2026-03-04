const productsService = require('./product.service');

const getAllProducts = (req, res) => {
    try {
        const products = productsService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

const getProductById = (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const product = productsService.getProductById(id);
        if (!product) {
            return res.status(404).json({ error: 'Produit introuvable' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

// const createProduct = (req, res) => {
//     try {
//         const { name, price } = req.body;
//         if (!name || !price) {
//             return res.status(400).json({ error: 'Champs manquants' });
//         }
//
//         const newProduct = productsService.createProduct({ name, price });
//         res.status(201).json(newProduct);
//     } catch (error) {
//         res.status(500).json({ error: 'Erreur serveur' });
//     }
// };

const createProductZod = (req, res) => {
    try {
        const newProduct = productsService.createProductZod(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    // createProduct,
    createProductZod
}

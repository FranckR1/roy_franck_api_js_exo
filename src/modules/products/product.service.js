const productRepository = require('./product.repository');

const getAllProducts = async (name) => {
    return await productRepository.getAllProducts(name);
};

const getProductById = async (id) => {
    const product = await productRepository.getProductById(id);
    if (!product) {
        throw new Error('Produit introuvable');
    }
    return product;
};

const createProduct = async (data) => {
    return await productRepository.createProduct(data);
};

const updateProduct = async (id, data) => {
    await getProductById(id);
    return await productRepository.updateProduct(id, data);
};

const deleteProduct = async (id) => {
    await getProductById(id);
    return await productRepository.deleteProduct(id);
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}

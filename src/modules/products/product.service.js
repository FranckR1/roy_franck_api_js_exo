const { products } = require('./product.repository');

const getAllProducts = () => {
    return products;
}

const getProductById = (id) => {
    return products.find(product => product.id === id);
};

// const createProduct = (data) => {
//     const newProduct = {
//         id: products.length + 1,
//         name: data.name,
//         price: data.price,
//     };
//     products.push(newProduct);
//     return newProduct;
// };

const createProductZod = (data) => {
    const newProduct = {
        id: Math.floor(Math.random() * 1000),
        ...data,
    };
    products.push(newProduct);
    return newProduct;
};

module.exports = {
    getAllProducts,
    getProductById,
    // createProduct,
    createProductZod
}

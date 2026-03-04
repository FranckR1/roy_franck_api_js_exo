const { pool } = require('../../db/db');

const getAllProducts = async () => {
    const [rows] = await pool.query('SELECT * FROM products');
    return rows;
};

const getProductById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM products WHERE product_id = ?', [id]);
    return rows[0];
};

const createProduct = async (data) => {
    await pool.query(
        'INSERT INTO products (name, price, category) VALUES (?, ?, ?)',
        [data.name, data.price, data.category]
    );
    return { ...data };
};

const updateProduct = async (id, data) => {
    await pool.query(
        'UPDATE products SET name = ?, price = ?, category = ? WHERE product_id = ?',
        [data.name, data.price, data.category, id]
    );
    return getProductById(id);
};

const deleteProduct = async (id) => {
    const [result] = await pool.query(
        'DELETE FROM products WHERE product_id = ?',
        [id]
    );
    return result.affectedRows;
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};

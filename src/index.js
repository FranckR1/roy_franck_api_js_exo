const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const productsRoute = require('../src/modules/products/product.route');

app.use('/api', productsRoute);

app.listen(PORT, () => {
    console.log(`🚀
 Serveur démarré sur http://localhost:${PORT}`);
});

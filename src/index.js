const express = require("express");
const app = express();
const PORT = 3000;
require('dotenv').config();
const { pool } = require('../src/db/db');
const { logger } = require('../src/core/logger/logger');
const swaggerUi = require('swagger-ui-express');
const { swaggerSpec } = require('../src/config/swagger');

app.use(express.json());

const productsRoute = require('../src/modules/products/product.route');

app.use('/api', productsRoute);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(PORT, () => {
    logger.info(`Serveur démarré sur http://localhost:${PORT}`);
});

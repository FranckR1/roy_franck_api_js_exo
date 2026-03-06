const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Sécurisée',
        version: '1.0.0',
        description: 'Documentation interactive de notre API REST',
    },
    servers: [
        {
            url: `http://localhost:3000/`,
            description: 'Serveur de Développement',
        },
    ],
    components: {

    },
    security: [
        { bearerAuth: [] }
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/modules/**/*.route.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerSpec };

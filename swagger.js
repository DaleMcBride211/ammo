const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Ammo API',
    description: 'Inventory management for firearms and ammunition',
  },
  host: 'localhost:8080', // Change this to your Render URL later
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
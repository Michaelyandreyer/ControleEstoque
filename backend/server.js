const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products');
const suppliersRoutes = require('./routes/suppliers');
const associationsRoutes = require('./routes/associations');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productsRoutes);
app.use('/api/suppliers', suppliersRoutes);
app.use('/api/associations', associationsRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

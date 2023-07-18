const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const adminRoute = require('./routes/administradores');
const categoriasRoute = require('./routes/categorias');
const clientesRoute = require('./routes/clientes');
const cuartosRoute = require('./routes/cuartos');
const medicamentosRoute = require('./routes/medicamentos');
const sensoresRoute = require('./routes/sensores');
const valoresRoute = require('./routes/valores');
const zonaRoute = require('./routes/zona');

const app = express();

app.use(cors());
const port = process.env.PORT || 9000;

app.use(express.json());
app.use('/api', adminRoute);
app.use('/api', categoriasRoute); 
app.use('/api', clientesRoute);
app.use('/api', cuartosRoute);
app.use('/api', medicamentosRoute); 
app.use('/api', sensoresRoute);
app.use('/api', valoresRoute);
app.use('/api', zonaRoute);

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

mongoose
  .connect("mongodb+srv://PruebaWeb:pruebaweb@cluster0.lolgdgf.mongodb.net/farmacia?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log('Atlas server listening on port:', port));

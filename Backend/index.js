const express = require('express');
const app = express();
const indexRoutes = require('./routes/IndexRoutes');  // Importar las rutas generales
var {config,routes} = require('./config.js')
app.use(express.json());
app.use(routes.API, indexRoutes);  // Aquí usamos el archivo de rutas general

app.listen(config.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${config.PORT}`);
});
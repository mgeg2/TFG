const express = require('express');
const userRoutes = require('./UserRoutes');

const router = express.Router();

// Enlazar las rutas específicas bajo la ruta base '/api'
router.use('/users', userRoutes);    // Rutas para usuarios

module.exports = router;
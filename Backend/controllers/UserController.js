const express = require('express');
const userService = require('../services/UserServices'); // Importar el servicio de usuarios

// Obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
};
module.exports = {
  getUsers};
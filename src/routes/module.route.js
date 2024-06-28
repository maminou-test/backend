const express = require('express');
const { readAllModules, addModule, updateModule, deleteModule } = require('../controllers/module.controller');
const { validate } = require('../middleware/validation.js');
const router = express.Router();

router.get('/', readAllModules
).post('/', addModule
).put('/:id', updateModule
).delete('/:id', deleteModule
);
module.exports = router;

const express = require('express');
const { readAllAlages, addAlgae, updateAlgae, deleteAlgae } = require('../controllers/algae.controller');
const { validate } = require('../middleware/validation.js');
const router = express.Router();

router.get('/', readAllAlages);
router.post('/', addAlgae);
router.put('/:id', updateAlgae);
router.delete('/:id', deleteAlgae);
module.exports = router;

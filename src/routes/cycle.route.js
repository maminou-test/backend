const express = require('express');
const { readAllCycles, addCycle, updateCycle, deleteCycle } = require('../controllers/cycle.controller');
const { validate } = require('../middleware/validation.js');
const { cycleSchemaPOST } = require('../schema/cycle.schema');
const router = express.Router();

// ).post('/', validate(cycleSchemaPOST), addCycle
router.get('/', readAllCycles
).post('/', addCycle
).put('/:id', updateCycle
).delete('/:id', deleteCycle
);
module.exports = router;

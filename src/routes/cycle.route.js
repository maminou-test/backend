const express = require('express');
const { readAllCycles, addCycle, updateCycle, deleteCycle } = require('../controllers/cycle.controller');
const router = express.Router();


router.get('/', readAllCycles
).post('/', addCycle
).put('/', updateCycle
).delete('/', deleteCycle
);
module.exports = router;

const express = require('express');
const { readAllExperiments, addExperiment, updateExperiment, deleteExperiment } = require('../controllers/experiment.controller');
const { validate } = require('../middleware/validation.js');
const router = express.Router();

router.get('/', readAllExperiments
).post('/', addExperiment
).put('/:id', updateExperiment
).delete('/:id', deleteExperiment
);
module.exports = router;

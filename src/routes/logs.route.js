const express = require('express');
const { readAllLogss, addLogs, updateLogs, deleteLogs } = require('../controllers/logs.controller');
const { validate } = require('../middleware/validation.js');
const router = express.Router();

router.get('/', readAllLogss
).post('/', addLogs
).put('/:id', updateLogs
).delete('/:id', deleteLogs
);
module.exports = router;

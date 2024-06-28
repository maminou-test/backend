const express = require('express');
const { readAllDevices, addDevice, updateDevice, deleteDevice } = require('../controllers/device.controller');
const { validate } = require('../middleware/validation.js');
const router = express.Router();

router.get('/', readAllDevices
).post('/', addDevice
).put('/:id', updateDevice
).delete('/:id', deleteDevice
);
module.exports = router;

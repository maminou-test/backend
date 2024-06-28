const express = require('express');

const router = express.Router();

router.use("/cycle", require('./cycle.route'));
router.use("/algae",require("./algae.route"));
router.use("/device",require("./device.route"));
router.use("/experiment",require("./experiment.route"));
router.use("/logs",require("./logs.route"));
router.use("/module",require('./module.route'));
module.exports = router;

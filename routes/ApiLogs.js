const express = require("express");
const { getLogs } = require("../controller/ApiLogs");
const router = express.Router();

router.get("/", getLogs);

module.exports = router;

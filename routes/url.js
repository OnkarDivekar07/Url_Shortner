const express = require("express");

const router = express.Router();
const controller = require("../Controller/url");

router.post("/", controller.genrateshorturl);

module.exports = router;

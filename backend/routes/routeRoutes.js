const express = require("express");

const router = express.Router();

const {
    findRoute
} = require("../controllers/routeController");

router.post("/find", findRoute);

module.exports = router;
const express = require("express");
const testController = require("../controllers/testController");


const router = express.Router();


router.get("/test1", testController)
module.exports = router;
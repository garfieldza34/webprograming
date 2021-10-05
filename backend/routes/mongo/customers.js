const express = require("express");
const router = express.Router();
const controller = require("../../controllers/mongo/customersController");

router.get("/customers", controller.index);
router.post("/customers", controller.insert);
router.put("/customers", controller.update);
router.delete("/customers", controller.delete);

module.exports = router;
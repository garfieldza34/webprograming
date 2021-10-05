const express = require("express");
const router = express.Router();
const controller = require("../../controllers/mongo/productController ");

router.get("/Products", controller.index);
router.post("/Products", controller.insert);
router.put("/Products", controller.update);
router.delete("/Products", controller.delete);



module.exports = router;
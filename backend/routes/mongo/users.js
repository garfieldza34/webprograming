const express = require("express");
const router = express.Router();
const controller = require("../../controllers/mongo/usersController");

router.get("/users", controller.index);
router.post("/users", controller.insert);
router.put("/users", controller.update);
router.delete("/users", controller.delete);
router.post("/users/login", controller.login);

module.exports = router;
// Lấy từ router.use trong expressjs.com tạo biến newController lấy giá trị require bên NewsController.js
const express = require("express");
const router = express.Router();
const newController = require("../app/controllers/NewsController");
router.use("/:slug", newController.show);
router.use("/", newController.index);
module.exports = router;

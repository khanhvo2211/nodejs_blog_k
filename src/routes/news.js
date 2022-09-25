// Lấy từ router.get trong expressjs.com tạo biến newController lấy giá trị require bên NewsController.js
const express = require("express");
const router = express.Router();
const newController = require("../app/controllers/NewsController");
router.get("/:slug", newController.show);
router.get("/", newController.index);
module.exports = router;

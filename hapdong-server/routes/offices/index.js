const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json({
    success: "true",
    message: "전체 조회 성공"
  });
});

module.exports = router;

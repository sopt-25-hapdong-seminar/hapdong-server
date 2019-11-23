const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/signin", function(req, res, next) {
  res.json({
    status: 200,
    success: true,
    message: "로그인 성공"
  });
});

router.post("/signup", function(req, res, next) {
  res.json({
    status: 200,
    success: true,
    message: "회원가입 성공"
  });
});

router.get("/:userIdx", function(req, res, next) {
  const userIdx = req.params.userIdx;
  console.log(userIdx);
  res.json({
    status: 200,
    success: true,
    message: "로그인 성공"
  });
});
module.exports = router;

const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/signin", function(req, res, next) {
  res.json({
    status: 200,
    success: true,
    message: "로그인 성공",
    data: {
      userId: "user1"
    }
  });
});

router.post("/signup", function(req, res, next) {
  res.json({
    status: 200,
    success: true,
    message: "회원가입 성공"
  });
});

router.get("/:id", function(req, res, next) {
  const id = req.params.id;
  console.log(id);
  res.json({
    status: 200,
    success: true,
    message: "회원 조회 성공"
  });
});
module.exports = router;

const supabase = require("../db/index");
const express = require("express");
const router = express.Router();

router.post("/postForm", express.json(), async (req, res) => {
  const insertData = {
    accept: 1,
    ...req.body,
  };
  const { data } = await supabase
    .from("accpte_challenge")
    .select("*")
    .filter("user_id", "in", `(${req.body.user_id})`);
  if (data.length > 0) {
    res.status(200).json({
      code: 201,
      message: "你已经接受过该挑战了",
      data: null,
    });
    return;
  }
  const { error } = await supabase.from("accpte_challenge").insert(insertData);
  if (error) {
    res.status(200).json({
      code: 201,
      message: error.message,
      data: null,
    });
    return;
  }
  res.status(200).json({
    message: "提交成功",
    data: null,
    code: 200,
  });
});

module.exports = router;

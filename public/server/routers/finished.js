const supabase = require("../db/index");
const express = require("express");
const router = express.Router();

router.post("/postForm", express.json(), async (req, res) => {
  const insertData = {
    finished: 1,
    ...req.body,
  };
  const { data } = await supabase
    .from("finished_challenge")
    .select("*")
    .filter("github_url", "in", `(${req.body.github_url})`);

  if (data.length > 0) {
    res.status(200).json({
      code: 201,
      message: "你已经完成过挑战了",
      data: null,
    });
    return;
  }
  const { error } = await supabase
    .from("finished_challenge")
    .insert(insertData);
  console.log("error", error);

  if (error) {
    res.status(200).json({
      code: 201,
      message: error.message,
      data: null,
    });
    return;
  }
  res.status(200).json({
    message: "挑战成功,请静候通知",
    data: null,
    code: 200,
  });
});

module.exports = router;

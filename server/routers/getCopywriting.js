const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const marked = require("marked");
router.get("/index", (req, res) => {
  fs.readFile(
    path.join(__dirname, "../static/COPYWRITING.md"),
    "utf8",
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        // 将Markdown内容转换为HTML
        const html = marked.parse(data);
        res.status(200).send(html);
      }
    }
  );
});

module.exports = router;

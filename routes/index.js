var express = require("express");
var router = express.Router();
var todos = require("../data/todos");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "To Do List", todos });
});

router.post("/", function (req, res, next) {
  todos.push(req.body);
  res.redirect("/");
});

router.delete("/:id", function (req, res, next) {
  console.log(req.params.id);
  todos.splice(req.params.id, 1);
  res.redirect("/");
});

module.exports = router;

const todos = require("../data/todos");

 function getAll() {
   return todos;
 }

function index(req, res) {
  res.render("index", { todos,
  });
}

function create(req, res) {
  req.body.done = false;
  todos.push(req.body);
  res.redirect("/");
}

function deleteTodo(req, res) {
  todos.splice(req.params.id);
  res.redirect("/");
}

module.exports = {
  index:index,
  create:create,
  deleteTodo: deleteTodo,
  getAll,
};

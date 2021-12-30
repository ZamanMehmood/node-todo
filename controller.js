const todolist = [{ id: 1, title: "list n", marked: true }];
const addlist = (req, res, next) => {
  const { title, duedate, marked } = req.body;
  todolist.push({ id: todolist.length + 1, title, duedate, marked });
  return res.status(200).json({
    success: true,
    data: { id: todolist.length + 1, title, duedate, marked },
  });
};
const getList = (req, res, next) => {
  console.log("get list");
  return res.status(200).json({
    success: true,
    data: todolist,
  });
};
const getById = (req, res, next) => {
  let todoId = Number(req.params.Id);
  let item = todolist.find((todo) => todo.id === todoId);
  console.log("item", item, todoId);
  return res.status(200).json({
    success: true,
    data: item,
  });
};

const deleteitem = (req, res, next) => {
  let todoId = Number(req.params.Id);

  let index = -1;
  index = todolist.findIndex((singleitem) => singleitem.id === todoId);

  todolist.splice(index, 1);

  return res.status(200).json({
    success: true,
  });
};

const updatelist = (req, res, next) => {
  let todoId = Number(req.params.Id);
  let item = todolist.find((todo, index) => {
    if (todo.id === todoId) {
      let todo = todolist[index];
      todo.marked = req.body.marked;
      todo.title = req.body.title;
      todo.duedate = req.body.duedate;
      return { todo };
    }
  });
  return res.status(200).json({
    success: true,
    data: item,
  });
};

module.exports = {
  getById,
  addlist,
  getList,
  deleteitem,
  updatelist,
};

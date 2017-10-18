const todoItems = require('../../../repository/items');

const get = (req, res) => {
  const id = req.params.id;
  const item = todoItems.get(id);
  if (item) {
    res.json(todoItems.get(id));
  } else {
    res.status(404).json({
      type: 'error',
      message: `Item ${id} not found` });
  }
};

const getAll = (req, res) => {
  res.json(todoItems.getAll());
};

const remove = (req, res) => {
  const id = req.params.id;
  todoItems.remove(id);
  res.status(204).send();
};

const add = (req, res) => {
  const todoItem = req.body.value;
  const id = todoItems.add(todoItem);
  res.status(201).json({ id });
};

module.exports = {
  get,
  getAll,
  remove,
  add,
};

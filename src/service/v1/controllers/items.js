const todoItems = require('../../../repository/items');
const logger = require('../../../utils/helpers/logger');

const get = (req, res) => {
  const { id } = req.params;
  const item = todoItems.get(id);
  if (item) {
    res.json(todoItems.get(id));
  } else {
    res.status(404).json({
      type: 'error',
      message: `Item ${id} not found`,
    });
  }
};

const getAll = (req, res) => {
  const { query } = req;
  const items = todoItems.getAll();
  logger.log('info', 'Get queried items', { query });
  const queryKeys = Object.keys(query);
  if (queryKeys.length === 0) {
    res.json(items);
  } else {
    const filteredItems = [];
    queryKeys.forEach((key) => {
      filteredItems.push(
        ...items.filter((item) => item[key] === query[key]),
      );
    });
    res.json(filteredItems);
  }
};

const remove = (req, res) => {
  const { id } = req.params;
  todoItems.remove(id);
  res.status(204).send();
};

const add = (req, res) => {
  const todoItem = req.body;
  const id = todoItems.add(todoItem);
  res.status(201).json({ id });
};

const update = (req, res) => {
  const todoItem = req.body;
  const { id } = req.params;
  todoItems.update(id, todoItem);
  res.status(200).json({ id });
};
const patch = (req, res) => {
  const todoItem = req.body;
  const { id } = req.params;
  todoItems.patch(id, todoItem);
  res.status(200).json({ id });
};

module.exports = {
  get,
  getAll,
  remove,
  add,
  patch,
  update,
};

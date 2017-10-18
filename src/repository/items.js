// NOTE we use localStorage in this example to simplify/mock a backend.
// Also we use to illustrate how frontend code can be used on the backend.
// In production you should use a proper data store i.e. mySql, redis, couchdb etc.
const { LocalStorage } = require('node-localstorage');

const storagePath = (process.env.NODE_ENV === 'test') ? './test-db' : './scratch';
const localStorage = new LocalStorage(storagePath);

const items = (localStorage.getItem('todoList')) ?
  JSON.parse(localStorage.getItem('todoList')) : {};

function generateId() {
  return (+(new Date())).toString(); // Use a GUID generator instead of this
}

function save() {
  localStorage.setItem('todoList', JSON.stringify(items));
}

const publicAPI = {};

publicAPI.add = (value) => {
  const uniqueId = generateId();
  items[uniqueId] = {
    value,
  };
  save();
  return uniqueId;
};

publicAPI.get = id => items[id];

publicAPI.remove = (id) => {
  delete items[id];
  save();
};

publicAPI.getAll = () => {
  const itemsArray = [];
  Object.keys(items).forEach((id) => {
    itemsArray.push({
      id,
      value: items[id].value,
    });
  });
  return itemsArray;
};

module.exports = publicAPI;

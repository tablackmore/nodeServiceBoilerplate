const express = require('express');

const itemsController = require('../controllers/items');

const router = express.Router();

router.get('/', itemsController.getAll);
router.get('/:id', itemsController.get);
router.delete('/:id', itemsController.remove);
router.post('/', itemsController.add);

module.exports = router;

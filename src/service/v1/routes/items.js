const express = require('express');

const itemsController = require('../controllers/items');

const router = express.Router();

router.get('/', itemsController.getAll);
router.post('/', itemsController.add);
router.get('/:id', itemsController.get);
router.delete('/:id', itemsController.remove);
router.put('/:id', itemsController.update);
router.patch('/:id', itemsController.patch);

module.exports = router;

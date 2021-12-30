const express = require('express');

const {
  addlist,
  getList,
  deleteitem,
  updatelist,
  getById,
} = require('./controller');
const router = express.Router();
router.post('/add-todo', addlist);
router.get('/get-todos', getList);
router.get('/get-todo/:Id', getById);
router.put('/update-todo/:Id', updatelist);
router.delete('/delete/:Id', deleteitem);

module.exports = router;

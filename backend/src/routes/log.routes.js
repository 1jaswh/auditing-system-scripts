const express = require('express');
const { Log } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  const { userId, action, from, to } = req.query;

  const where = {};
  if (userId) where.userId = userId;
  if (action) where.action = action;
  if (from || to) {
    where.timestamp = {};
    if (from) where.timestamp[">="] = new Date(from);
    if (to) where.timestamp["<="] = new Date(to);
  }

  const logs = await Log.findAll({ where, order: [['timestamp', 'DESC']] });
  res.json(logs);
});

module.exports = router;

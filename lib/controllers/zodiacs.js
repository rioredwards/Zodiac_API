const { Router } = require('express');
const { zodiacs } = require('../zodiacs-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    const match = zodiacs.find(({ id }) => id === req.params.id);
    return res.json(match);
  })
  .get('/', (req, res) => {
    const filteredData = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    res.json(filteredData);
  });

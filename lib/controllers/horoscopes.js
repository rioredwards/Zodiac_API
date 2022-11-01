const { Router } = require('express');
const { horoscopes } = require('../horoscope-data');

module.exports = Router().get('/:sign', (req, res) => {
  const match = horoscopes.find(({ sign }) => sign === req.params.sign);
  return res.json(match.text);
  //   return res.json(match.text);
});

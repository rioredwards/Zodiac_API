const { Router } = require('express');
const fetch = require('cross-fetch');

module.exports = Router().get('/', async (req, res) => {
  const horoscope = await getHoroscope(req.query.horoscope);
  return res.json(horoscope);
});

// cross-fetch
async function getHoroscope(zodiacSign) {
  try {
    // get request from Ohmanda horoscope API
    const response = await fetch(`//ohmanda.com/api/horoscope/${zodiacSign}`);
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

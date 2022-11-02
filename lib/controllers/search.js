const { Router } = require('express');
// const { zodiacs } = require('../zodiacs-data');

module.exports = Router().get('/', (req, res) => {
  const date = req.query.birthDate;
  if (date) {
    console.log(date);
    const splitDateArray = date.split('-');
    const year = Number(splitDateArray[0]);
    const month = Number(splitDateArray[1]);
    const day = Number(splitDateArray[2]);
    console.log(year, month, day);
    const sign = findZodiacSign(month, day);
    return res.json(sign);
  }
});

function findZodiacSign(month, day) {
  let sign;

  if (month === 1) {
    if (day < 20) sign = 'capricorn';
    else sign = 'aquarius';
  } else if (month === 2) {
    if (day < 19) sign = 'aquarius';
    else sign = 'pisces';
  } else if (month === 3) {
    if (day < 21) sign = 'pisces';
    else sign = 'aries';
  } else if (month === 4) {
    if (day < 20) sign = 'pisces';
    else sign = 'taurus';
  } else if (month === 5) {
    if (day < 21) sign = 'taurus';
    else sign = 'gemini';
  } else if (month === 6) {
    if (day < 22) sign = 'gemini';
    else sign = 'cancer';
  } else if (month === 7) {
    if (day < 23) sign = 'cancer';
    else sign = 'leo';
  } else if (month === 8) {
    if (day < 23) sign = 'leo';
    else sign = 'virgo';
  } else if (month === 9) {
    if (day < 23) sign = 'virgo';
    else sign = 'libra';
  } else if (month === 10) {
    if (day < 24) sign = 'libra';
    else sign = 'scorpio';
  } else if (month === 11) {
    if (day < 22) sign = 'scorpio';
    else sign = 'sagittarius';
  } else if (month === 12) {
    if (day < 22) sign = 'sagittarius';
    else sign = 'capricorn';
  }

  return sign;
}

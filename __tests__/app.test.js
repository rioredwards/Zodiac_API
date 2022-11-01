const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../lib/zodiacs-data.js');

describe('zodiacs routes', () => {
  it('home route should return hello world', async () => {
    const resp = await request(app).get('/');
    expect(resp.text).toEqual('hello world!');
  });

  it('/zodiacs should return a list of zodiacs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/horoscopes/:sign should return zodiac detail', async () => {
    const res = await request(app).get('/horoscopes/aquarius');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
      horoscope: 'You are going to eat chocolate cake'
    };
    expect(res.body).toEqual(aquarius);
  });
});

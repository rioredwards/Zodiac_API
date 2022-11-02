const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../lib/zodiacs-data.js');

describe('zodiacs routes', () => {
  // it('home route should return hello world', async () => {
  //   const resp = await request(app).get('/');
  //   expect(resp.text).toEqual('hello world!');
  // });

  it('/zodiacs should return a list of zodiacs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiacs/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiacs/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });

  it('/search?date=mm/dd/yyyy should return zodiac sign associated with birth-date', async () => {
    const res = await request(app).get('/search/?birthDate=10/13/1997');
    const sign = 'libra';
    expect(res.body).toEqual(sign);
  });

  it('/horoscopes/?horoscope=sign should return horoscope detail', async () => {
    const res = await request(app).get('/horoscopes/?horoscope=aquarius');
    const horoscope = {
      sign: 'aquarius',
      date: '2022-11-01',
      // eslint-disable-next-line
      horoscope: `You may have a hard time appreciating the little things this morning, dear Aquarius, as the moon forms a harsh square with the nodes of fate. Certain lifestyle luxuries, personal success, and status may not taste as sweet as you'd hoped, causing you to close off emotionally. Don't be hard on yourself if you're feeling disenchanted with the world, but try to reach for that which brings you joy. The vibe will be charged within your domestic affairs when Luna squares off with Uranus this afternoon, so you'll want to be on guard for finicky appliances or temperamental roommates.`,
    };
    expect(res.body).toEqual(horoscope);
  });
});

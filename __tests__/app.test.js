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

  it('/horoscopes/:sign should return horoscope detail', async () => {
    const res = await request(app).get('/horoscopes/aquarius');
    // eslint-disable-next-line
    const horoscope = `This is one of those days when you just can't wait for someone to stop talking so you can say something, Aquarius. It's likely you won't even wait. Don't be surprised if friction results from such strongly held opposing views. People could blow things out of proportion, since everyone is convinced that they are right. The interesting thing about this situation is that it could result in a productive time.`;
    expect(res.body).toEqual(horoscope);
  });
});

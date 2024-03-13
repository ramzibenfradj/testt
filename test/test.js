const request = require('supertest');
const app = require('../app');

describe('POST /tasks', () => {
  it('task sent', async () => {
    const response = await request(app)
      .post('/post')
      .send({});

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('task sent');
  });
});
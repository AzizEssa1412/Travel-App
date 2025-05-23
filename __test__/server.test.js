import request from 'supertest';
import app from '../src/server/server'; // تأكد أن هذا هو المسار الصحيح للملف

const port = process.env.PORT || 4007;

describe('Basic Express Server Test', () => {
  it('should return a 200 status when the server is up and running', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
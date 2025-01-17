import request from 'supertest';
import { AppDataSource } from '../database/data-source';
import app from '../app';

beforeAll(async () => {
  await AppDataSource.initialize();
  await AppDataSource.synchronize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('User API testing', () => {
  let createdUserId: number;

  it('should able to create a new user', async () => {
    const res = await request(app).post('/api/users').send({
      name: 'Test User',
      description: 'This is a test user',
    });

    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    createdUserId = res.body.id;
  });

  it('should able to retrieve the the created user', async () => {
    const res = await request(app).get(`/api/users/${createdUserId}`);

    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Test User');
  });

  it('should able to update the user', async () => {
    const res = await request(app).put(`/api/users/${createdUserId}`).send({
      name: 'Updated User',
      description: 'Updated description',
    });

    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Updated User');
  });

  it('should able to delete the user', async () => {
    const res = await request(app).delete(`/api/users/${createdUserId}`);
    expect(res.status).toBe(200);
  });

  it('when deleting a user should return 404 if not found', async () => {
    const res = await request(app).delete(`/api/user/1234`);
    expect(res.status).toBe(404);
  });

  it('when retrieving a user should return 404 if not found', async () => {
    const res = await request(app).get(`/api/user/1234`);
    expect(res.status).toBe(404);
  });
});

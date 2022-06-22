const { app, server } = require('../src/index')
const api = require('supertest')(app)

describe('backend', () => {
  test('/ return 200', async () => {
    await api
      .get('/')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('/ return a message', async () => {
    const response = await api
      .get('/')

    expect(response.body).toEqual({ message: 'Hello World!' })
  })
})

afterAll(() => {
  server.close()
})
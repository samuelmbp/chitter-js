/* eslint-disable no-undef */
const app = require('../../server');
const assert = require('assert');
const request = require('supertest');

// describe('POST /', function () {
// 	it('Responds with json when posting a new message', async function () {
// 		const response = await request(app)
// 			.post('/')
// 			.send({ message: 'Hello, chitters.' })
// 			.set('Accept', 'application/json');
// 		expect(response.headers['Content-Type']).toMatch(/json/);
// 		expect(response.status).toEqual(200);
// 		expect(response.body.message).toEqual('Hello, chitters.');
// 	});
// });

describe('POST /', () => {
	it('Responds with json when posting a new message', (done) => {
		request(app)
			.post('/')
			.send({ message: 'Hello, chitters.', createdAt: '08/13/2022' })
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((response) => {
				assert(response.body.message, 'Hello, chitters.');
				assert(response.body.createdAt, '08/13/2022');
				done();
			})
			.catch((err) => done(err));
	});
});

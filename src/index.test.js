const request = require('request');

describe('This is a test for index.js', () => {
	test('canary test', () => {
		expect(true).toBe(true);
	});

	test('expect to see if an http request can be made', () => {
		const options = {
			method: 'GET',
			url: 'http://httpbin.org/get',
			headers: {}
		};

		request(options, (error, response) => {
			if (error) throw new Error(error);
			expect(response.statusCode).toBe(200);
		});
	});

	test('expect getRequests to return all valid http request', () => {});

	test('expect getRequests to return correct amount of http request', () => {});

	test('expect validateRequest to ensure getRequest only have valid objects ', () => {});

	test('expect validateResponse to be a valid object', () => {});
});

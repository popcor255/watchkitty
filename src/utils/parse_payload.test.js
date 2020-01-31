const { parse_payload } = require('./parse_payload.js');

describe('Tests for the parse_payload.js', () => {
	test('canary test', () => {
		expect(true).toBe(true);
	});
	test('expect payload to converted to JSON obj', () => {
		const empty_object = '{"key":"test"}';

		expect(parse_payload(empty_object)).toEqual({ key: 'test' });
	});
});

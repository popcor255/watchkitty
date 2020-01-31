var src_file = './';

describe('Tests for the parse_payload.js', () => {
	test('canary test', () => {
		expect(true).toBe(true);
	});
	test('expect payload to converted to JSON obj', () => {
		let empty_object = '{"key":"test"}';
		let { parse_payload } = require(src_file + 'parse_payload.js');

		expect(parse_payload(empty_object)).toEqual({ key: 'test' });
	});
});
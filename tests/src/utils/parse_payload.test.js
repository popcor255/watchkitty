describe('Tests for the parse_payload.js', () => {
    test('expect payload to converted to JSON obj', () => {
        let empty_object = '{"key":"test"}';
        let { parse_payload } = require('../../../src/utils/parse_payload.js');
        
        expect(parse_payload(empty_object)).toEqual({"key": "test"});
    });
})
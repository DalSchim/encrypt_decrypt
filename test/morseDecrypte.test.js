import morseDecrypte from '../src/morseDecrypte.js';

describe('morseDecrypte', () => {

    test("make the morseDecrypte of '.... . .-.. .-.. --- / -.-.--'", () => {
        expect(morseDecrypte('.... . .-.. .-.. --- / -.-.--')).toBe('HELLO !');
    });

    test("make the morseDecrypte of '.... . .-.. .-.. --- / -.-.-- / ..--.-'", () => {
        expect(morseDecrypte('.... . .-.. .-.. --- / -.-.-- / ..--.-')).toBe('A character is not suported');
    });

    test("make the morseDecrypte of 157", () => {
        expect(morseDecrypte(157)).toBe('The input must be a type string');
    });

    test("make the morseDecrypte of 'hello'", () => {
        expect(morseDecrypte('hello')).toBe('A character is not suported');
    });

});
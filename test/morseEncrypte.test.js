import morseEncrypte from '../src/morseEncrypte';

describe('morseEncrypte', () => {

    test("make the morseEncrypte of 'hello !'", () => {
        expect(morseEncrypte('hello !')).toBe('.... . .-.. .-.. --- / -.-.--');
    });

    test("make the morseEncrypte of 'hell@ !'", () => {
        expect(morseEncrypte('hell@ !')).toBe('A character is not suported');
    });

    test("make the morseEncrypte of 157", () => {
        expect(morseEncrypte(157)).toBe('The input must be a type string');
    });

    test("make the morseEncrypte of ", () => {
        expect(morseEncrypte()).toBe('The input must be a type string');
    });

    test("make the decrypteMorse of ''", () => {
        expect(morseEncrypte('')).toBe('The input must not be empty');
    });

});
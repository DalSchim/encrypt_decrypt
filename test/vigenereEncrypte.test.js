import vigenereEncrypte from '../src/vigenereEncrypte';

describe('vigenereEncrypte', () => {
    
    test("base use case", () => {
        expect(vigenereEncrypte('musique', 'j"adore ecouter la radio toute la journee')).toBe('v"uvwhy ioimbul pm lslyi xaolm bu naojvuy');
    });

    test("empty string", () => {
        expect(vigenereEncrypte('musique', '')).toBe('The input must not be empty');
    });

    test("empty key", () => {
        expect(vigenereEncrypte('', 'j"adore ecouter la radio toute la journee')).toBe('The input must not be empty');
    });

    test("empty string and key", () => {
        expect(vigenereEncrypte('', '')).toBe('The input must not be empty');
    });

    test(" key + number ", () => {
        expect(vigenereEncrypte('musique', 8)).toBe('The input must be a type string');
    });

    test(" number + message ", () => {
        expect(vigenereEncrypte(8, 'j"adore écouter la radio toute la journee')).toBe('The input must be a type string');
    });

    test("number", () => {
        expect(vigenereEncrypte(8, 8)).toBe('The input must be a type string');
    });

    test("speacial", () => {
        expect(vigenereEncrypte('musiq8', 'j"adore écouter la radio toute la journee')).toBe('A character is not suported in the Key');
    });

}); 
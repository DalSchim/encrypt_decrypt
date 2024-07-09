import vigenereDecrypte from '../src/vigenereDecrypte';

describe('vigenereDecrypte', () => {
    
    test("base use case", () => {
        expect(vigenereDecrypte('musique', 'v"uvwhy ioimbul pm lslyi xaolm bu naojvuy')).toBe('j"adore ecouter la radio toute la journee');
    });

    test("empty string", () => {
        expect(vigenereDecrypte('musique', '')).toBe('The input must not be empty');
    });

    test("empty key", () => {
        expect(vigenereDecrypte('', 'j"adore ecouter la radio toute la journee')).toBe('The input must not be empty');
    });

    test("empty string and key", () => {
        expect(vigenereDecrypte('', '')).toBe('The input must not be empty');
    });

    test(" key + number ", () => {
        expect(vigenereDecrypte('musique', 8)).toBe('The input must be a type string');
    });

    test(" number + message ", () => {
        expect(vigenereDecrypte(8, 'j"adore écouter la radio toute la journee')).toBe('The input must be a type string');
    });

    test("number", () => {
        expect(vigenereDecrypte(8, 8)).toBe('The input must be a type string');
    });

    test("speacial", () => {
        expect(vigenereDecrypte('musiq8', 'j"adore écouter la radio toute la journee')).toBe('A character is not suported in the Key');
    });

});
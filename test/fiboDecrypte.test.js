import fiboDecrypte from "../src/fiboDecrypte";

describe("make the fiboDecrypte of 'hfmnr'", () => {

    test("make ", () => {
        expect(fiboDecrypte('hfmnr')).toBe('hello');
    });

    test("make the fiboDecrypte of 157", () => {
        expect(fiboDecrypte(157)).toBe('The input must be a type string');
    });

    test("make the fiboDecrypte of 'héllo'", () => {
        expect(fiboDecrypte('héllo')).toBe('hdkjl');
    });

    test("make the fiboDecrypte of 'hfmnr !'", () => {
        expect(fiboDecrypte('hfmnr !')).toBe('hello !');
    });

    test("make the fiboDecrypte of ", () => {
        expect(fiboDecrypte()).toBe('The input must be a type string');
    });

    test("make the fiboDecrypte of 'hfmn0'", () => {
        expect(fiboDecrypte('hfmn0')).toBe('hell0');
    });

});
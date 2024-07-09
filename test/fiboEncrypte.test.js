import fiboCrypte from "../src/fiboEncrypte";

describe("make the fiboDecrypte of 'hfmnr'", () => {

    test("test base case", () => {
        expect(fiboCrypte('hello')).toBe('hfmnr');
    });

    test("test number instead of string", () => {
        expect(fiboCrypte(157)).toBe('The input must be a type string');
    });

    test("test accent", () => {
        expect(fiboCrypte('héllo')).toBe('hfmnr');
    });

    test("test accent space & special caractere", () => {
        expect(fiboCrypte('hello !')).toBe('hfmnr !');
    });

    test("test nothing", () => {
        expect(fiboCrypte()).toBe('The input must be a type string');
    });

    test("test base case with number", () => {
        expect(fiboCrypte('hell0')).toBe('hfmn0');
    });

});
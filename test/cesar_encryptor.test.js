import cesar_encryptor from "../src/cesar_encryptor.js";

describe("cesar_encryptor", () => {


    test("cesar_encryptor of abc is def", () => {
            expect(cesar_encryptor("abc")).toBe("def");

        }
    )

    test("cesar_encryptor of ABC is DEF", () => {
            expect(cesar_encryptor("ABC")).toBe("DEF");

        }
    )

    test("cesar_encryptor with no letter ", () => {
            expect(() => cesar_encryptor("123456789")).toThrow("The string contains a character that is not a letter");
            expect(() => cesar_encryptor("&")).toThrow("The string contains a character that is not a letter");

        }
    )
})

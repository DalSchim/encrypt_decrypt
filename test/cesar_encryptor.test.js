import cesar_encryptor from "../src/cesar_encryptor.js";

describe("cesar_encryptor", () => {


    test("cesar_encryptor of abc is def", () => {
            expect(cesar_encryptor("abc", 2)).toBe("cde");

        }
    )

    test("cesar_encryptor of ABC is DEF", () => {
            expect(cesar_encryptor("ABC", 6)).toBe("GHI");

        }
    )

    test("cesar_encryptor of Coucou in Frxfrx", () => {
            expect(cesar_encryptor("Coucou", 3)).toBe("Frxfrx");


        }
    )

    test("cesar_encryptor with no letter ", () => {
            expect(() => cesar_encryptor("123456789" , 8)).toThrow("The string contains a character that is not a letter");
            expect(() => cesar_encryptor("&", 15)).toThrow("The string contains a character that is not a letter");
            expect(() => cesar_encryptor("Hello ! ", 1)).toThrow("The string contains a character that is not a letter");

        }
    )
})

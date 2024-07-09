import cesar_decryptor from "../src/cesar_decryptor";


describe("cesar_decryptor", () => {


    test("cesar_encryptor of abc is def", () => {
            expect(cesar_decryptor("def", 3)).toBe("abc");

        }
    )

    test("cesar_encryptor of ABC is DEF", () => {
            expect(cesar_decryptor("DEF", 4)).toBe("ZAB");

        }
    )

    test("cesar_encryptor of Coucou in Frxfrx", () => {
            expect(cesar_decryptor("Frxfrx", 5)).toBe("Amsams");


        }
    )

    test("cesar_encryptor with no letter ", () => {
            expect(() => cesar_decryptor("123456789" , 6)).toThrow("The string contains a character that is not a letter");
            expect(() => cesar_decryptor("&", 2)).toThrow("The string contains a character that is not a letter");

        }
    )
})

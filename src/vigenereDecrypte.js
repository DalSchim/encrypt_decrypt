/**
    * Function to decrypt a text using the Vigenère cipher
    * @param {string} key
    * @param {string} text
    * @returns {string}
 */

function vigenereDecrypte(key, text) {

    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const forbiddenChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '[', ']', '{', '}', '|', ';', '<', '>', '/'];

    if (typeof key !== 'string' || typeof text !== 'string') {
        return 'The input must be a type string';
    };

    if (key === '' || text === '') {
        return 'The input must not be empty';
    };

    const keyChars = key.split('');
    const textChars = text.split('');
    const decryptedChars = [];
    let keyIndex = 0;

    if (keyChars.some((char) => forbiddenChars.includes(char))) {
        return 'A character is not suported in the Key';
    };

    for (let i = 0; i < textChars.length; i++) {
        const char = textChars[i];
        const isUpperCase = char === char.toUpperCase();
        const index = alphabets.indexOf(char.toLowerCase());

        if (index === -1) {
            decryptedChars.push(char);
        } else {
            const keyChar = keyChars[keyIndex % keyChars.length];
            const keyIndexInAlphabet = alphabets.indexOf(keyChar.toLowerCase());
            const newIndex = (index - keyIndexInAlphabet + alphabets.length) % alphabets.length;
            const decryptedChar = alphabets[newIndex];
            decryptedChars.push(isUpperCase ? decryptedChar.toUpperCase() : decryptedChar);
            keyIndex++;
        };
    };

    return decryptedChars.join('');

}

export default vigenereDecrypte;
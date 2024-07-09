/**
    * Function to encrypt a text using the Vigenère cipher
    * @param {string} key - The key to encrypt the text
    * @param {string} text - The text to encrypt
    * @returns {string} - The encrypted text
 */

function vigenereEncrypte (key, text) {

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
    const encryptedChars = [];
    let keyIndex = 0;

    if (keyChars.some((char) => forbiddenChars.includes(char))) {
        return 'A character is not suported in the Key';
    };

    for (let i = 0; i < textChars.length; i++) {
        const char = textChars[i];
        const isUpperCase = char === char.toUpperCase();
        const index = alphabets.indexOf(char.toLowerCase());

        if (index === -1) {
            encryptedChars.push(char);
        } else {
            const keyChar = keyChars[keyIndex % keyChars.length];
            const keyIndexInAlphabet = alphabets.indexOf(keyChar.toLowerCase());
            const newIndex = (index + keyIndexInAlphabet) % alphabets.length;
            const encryptedChar = alphabets[newIndex];
            encryptedChars.push(isUpperCase ? encryptedChar.toUpperCase() : encryptedChar);
            keyIndex++;
        };
    };

    return encryptedChars.join('');

}

export default vigenereEncrypte;
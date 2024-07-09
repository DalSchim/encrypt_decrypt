/**
 * Encrypte a string to morse code
 * @param {string} string - The string to encrypt
 * @returns {string} - The encrypted string
 */


function morseEncrypte(string) {

    var table = [
        { char: 'A', code: '.-' }, { char: 'B', code: '-...' }, { char: 'C', code: '-.-.' }, { char: 'D', code: '-..' }, { char: 'E', code: '.' }, { char: 'F', code: '..-.' }, { char: 'G', code: '--.' }, { char: 'H', code: '....' }, { char: 'I', code: '..' }, { char: 'J', code: '.---' }, { char: 'K', code: '-.-' }, { char: 'L', code: '.-..' }, { char: 'M', code: '--' }, { char: 'N', code: '-.' }, { char: 'O', code: '---' }, { char: 'P', code: '.--.' }, { char: 'Q', code: '--.-' }, { char: 'R', code: '.-.' }, { char: 'S', code: '...' }, { char: 'T', code: '-' }, { char: 'U', code: '..-' }, { char: 'V', code: '...-' }, { char: 'W', code: '.--' }, { char: 'X', code: '-..-' }, { char: 'Y', code: '-.--' }, { char: 'Z', code: '--..' }, { char: '1', code: '.----' }, { char: '2', code: '..---' }, { char: '3', code: '...--' }, { char: '4', code: '....-' }, { char: '5', code: '.....' }, { char: '6', code: '-....' }, { char: '7', code: '--...' }, { char: '8', code: '---..' }, { char: '9', code: '----.' }, { char: '0', code: '-----' }, { char: ' ', code: '/' }, { char: '.', code: '.-.-.-'}, { char: ',', code: '--..--' }, { char: '?', code: '..--..' }, { char: '!', code: '-.-.--' }
    ];

    if (typeof string !== 'string') {
        return 'The input must be a type string';
    };

    if (string === '') {
        return 'The input must not be empty';
    };

    var chars = string.split('');
    var encryptedChars = [];

    if (chars.some((char) => !table.some((item) => item.char === char.toUpperCase()))) {
        return 'A character is not suported';
    };

    for (var i = 0; i < chars.length; i++) {
        var char = chars[i];
        var isUpperCase = char === char.toUpperCase();
        var index = table.findIndex((item) => item.char === char.toUpperCase());

        if (index === -1) {
            encryptedChars.push(char);
        } else {
            var encryptedChar = table[index].code;
            encryptedChars.push(isUpperCase ? encryptedChar : encryptedChar);
        }
    };
    return encryptedChars.join(' ');
};

export default morseEncrypte;
/**
 * Function that decryptes a morse code string
 * @param {string} string - The string to decrypte
 * @returns {string} - The decrypted string
 */

function morseDecrypte(string) {

    var table = [
        { char: 'A', code: '.-' }, { char: 'B', code: '-...' }, { char: 'C', code: '-.-.' }, { char: 'D', code: '-..' }, { char: 'E', code: '.' }, { char: 'F', code: '..-.' }, { char: 'G', code: '--.' }, { char: 'H', code: '....' }, { char: 'I', code: '..' }, { char: 'J', code: '.---' }, { char: 'K', code: '-.-' }, { char: 'L', code: '.-..' }, { char: 'M', code: '--' }, { char: 'N', code: '-.' }, { char: 'O', code: '---' }, { char: 'P', code: '.--.' }, { char: 'Q', code: '--.-' }, { char: 'R', code: '.-.' }, { char: 'S', code: '...' }, { char: 'T', code: '-' }, { char: 'U', code: '..-' }, { char: 'V', code: '...-' }, { char: 'W', code: '.--' }, { char: 'X', code: '-..-' }, { char: 'Y', code: '-.--' }, { char: 'Z', code: '--..' }, { char: '1', code: '.----' }, { char: '2', code: '..---' }, { char: '3', code: '...--' }, { char: '4', code: '....-' }, { char: '5', code: '.....' }, { char: '6', code: '-....' }, { char: '7', code: '--...' }, { char: '8', code: '---..' }, { char: '9', code: '----.' }, { char: '0', code: '-----' }, { char: ' ', code: '/' }, { char: '.', code: '.-.-.-'}, { char: ',', code: '--..--' }, { char: '?', code: '..--..' }, { char: '!', code: '-.-.--' }
    ];

    if (typeof string !== 'string') {
        return 'The input must be a type string';
    };

    if (string === '') {
        return 'The input must not be empty';
    };

    var chars = string.split(' ');
    var decryptedChars = [];

    if (chars.some((char) => !table.some((item) => item.code === char))) {
        return 'A character is not suported';
    };

    for (var i = 0; i < chars.length; i++) {
        var char = chars[i];
        var index = table.findIndex((item) => item.code === char);

        if (index === -1) {
            decryptedChars.push(char);
        } else {
            var decryptedChar = table[index].char;
            decryptedChars.push(decryptedChar);
        }
    };

    return decryptedChars.join('');

}

export default morseDecrypte;
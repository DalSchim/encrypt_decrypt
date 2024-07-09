/**
 * Function to decrypt a string using the Fibonacci sequence
 * @param {string} encryptedString - The string to decrypt
 * @returns {string} - The decrypted string
 */

function fiboDecrypte(encryptedString) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    if (typeof encryptedString !== 'string') {
        return 'The input must be a type string';
    }
 
    function fibo(length) {
        var key = [0];
        var a = 0;    
        var b = 1;
        for (var i = 1; i < length; i++) {
            key.push(b);
            [a, b] = [b, a + b];
        }
        return key;
    }
 
    var encryptedChars = encryptedString.split('');
    var decryptedChars = [];
    var key = fibo(encryptedChars.length);
 
    for (var i = 0; i < encryptedChars.length; i++) {
        var char = encryptedChars[i];

        if (char === 'é' || char === 'è' || char === 'ê' || char === 'ë') {
            char = 'e';
        }
    
        if (char === 'à' || char === 'â' || char === 'ä') {
            char = 'a';
        }
    
        if (char === 'ù' || char === 'û' || char === 'ü') {
            char = 'u';
        }
    
        if (char === 'î' || char === 'ï') {
            char = 'i';
        }
    
        if ( char === 'ô' || char === 'ö') {
            char = 'o';
        }
    
        if (char === 'ç') {
            char = 'c';
        }

        var isUpperCase = char === char.toUpperCase();
        var index = alphabet.indexOf(char.toLowerCase());
        if (index === -1) {
            decryptedChars.push(char);
        } else {
            var decryptedIndex = (index - key[i] + 26) % 26;

            if (decryptedIndex < 0) {
                decryptedIndex = decryptedIndex + 26;
            }
 
            var decryptedChar = alphabet[decryptedIndex];
            let temp = isUpperCase ? decryptedChar.toUpperCase() : decryptedChar;
            decryptedChars.push(temp);
        }
    }
    return decryptedChars.join('');
}

export default fiboDecrypte;
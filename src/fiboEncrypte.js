/**
 * Function to encrypt a string using fibonacci sequence
 * @param {string} string - The string to encrypt
 * @returns {string} - The encrypted string
 */

function fiboCrypte(string) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    if (typeof string !== 'string') {
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
 
    var chars = string.split('');
    var encryptedChars = [];
    var key = fibo(chars.length);

 
    for (var i = 0; i < chars.length; i++) {
        var char = chars[i];

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
            encryptedChars.push(char);
        } else {
            var encryptedIndex = (index + key[i]) % 26;
            var encryptedChar = alphabet[encryptedIndex];
            encryptedChars.push(isUpperCase ? encryptedChar.toUpperCase() : encryptedChar);
        }
    }
    return encryptedChars.join('');
}

export default fiboCrypte;
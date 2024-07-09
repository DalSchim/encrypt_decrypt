import cesar_encryptor from './src/cesar_encryptor.js';
import cesar_decryptor from './src/cesar_decryptor.js';
import morseEncrypte from "./src/morseEncrypte.js";
import morseDecrypte from "./src/morseDecrypte.js";


console.log(cesar_encryptor("abc" , 3)); // def
console.log(cesar_encryptor("ABC" , 4)); // DEF

console.log(cesar_decryptor("def", 3)); // abc
console.log(cesar_decryptor("DEF", 4)); // ZAB
console.log(cesar_decryptor("Frxfrx", 5)); // Amsams


console.log(morseEncrypte('Bonjour'));
console.log(morseDecrypte('.... . .-.. .-.. --- / -.-.--'));



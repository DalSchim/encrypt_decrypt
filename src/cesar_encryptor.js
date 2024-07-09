/**
 * Function Cesar encryptor
 * @Param string  - string to encrypt
 * @Return string - encrypted string
 * @Throws Error  - if the string contains a character that is not a letter
 * */

let alphabetLower = "abcdefghijklmnopqrstuvwxyz";
let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export default function cesar_encryptor(string, shift)
{
    let result = "";
    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            if (alphabetUpper[(alphabetUpper.indexOf(string.charAt(i)) + shift)]) {
                result += alphabetUpper[(alphabetUpper.indexOf(string.charAt(i)) + shift)];
            } else {
                result += alphabetUpper[(alphabetUpper.indexOf(string.charAt(i)) + shift - 26)];
            }
        } else if (char >= 97 && char <= 122) {
            if (alphabetLower[(alphabetLower.indexOf(string.charAt(i)) + shift)])
                result += alphabetLower[(alphabetLower.indexOf(string.charAt(i)) + shift)];
            else {
                result += alphabetLower[(alphabetLower.indexOf(string.charAt(i)) + shift - 26)];
            }

        } else {
            throw new Error("The string contains a character that is not a letter");
        }
    }
    return result;
}

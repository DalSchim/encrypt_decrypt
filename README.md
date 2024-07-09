# Encrypt & Descrypt

This package containt multiple function to help you encrypt and decrypt string of caractere.
It's a quick solution to send crypted message to your friend or decrypte them.

## Table of contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Project Structure](#project-structure)
6. [Tests](#tests)
7. [Contributing](#contributing)
8. [License](#license)

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

Install dependencies:

```bash
npm i encrypt_decrypt_iim_dogo
```

## Usage

```js
console.log(vigenereEncrypte('musique', 'j"adore ecouter la radio toute la journee')); // Expected output : v"uvwhy ioimbul pm lslyi xaolm bu naojvuy
console.log(vigenereDecrypte('musique', 'v"uvwhy ioimbul pm lslyi xaolm bu naojvuy')); // Expected output : j"adore ecouter la radio toute la journee

console.log(fiboCryption('hello')); // Expected output : hfmnr
console.log(fiboDecryption('hfmnr')); // Expected output : hello

console.log(cesar_encryptor("Coucou", 3)); // Expected output : Frxfrx
console.log(cesar_encryptor("Frxfrx", 3)); // Expected output : CouCou

console.log(encrypteMorse('hello !')); //Expected output : .... . .-.. .-.. --- / -.-.--
console.log(decrypteMorse('.... . .-.. .-.. --- / -.-.-- / ..--.-')); // Expected output : hello !
```

## Features

- Vigenère cipher
- César cipher
- Fibonacci cipher
- Morse code

## Project Structure

```
encrypt_decrypt/
│
├── .github/
│       ├── ISSUE_TEMPLATE/
│       │               ├── bug_report.md
│       │               └── feature_request.md
│       └── workflows/
│                   └── ci.yml
│
├── src/
│   ├── cesar_decryptor.js
│   ├── cesar_encryptor.js
│   ├── fiboDecrypte.js
│   ├── fiboEncrypte.js
│   ├── morseDecrypte.js
│   ├── morseEncrypte.js
│   ├── vigenereDecrypte.js
│   └── vigenereEncrypte.js
│
├── test/
│   ├── cesar_decryptor.test.js
│   ├── cesar_encryptor.test.js
│   ├── fiboDecrypte.test.js
│   ├── fiboEncrypte.test.js
│   ├── morseDecrypte.test.js
│   ├── morseEncrypte.test.js
│   ├── vigenereDecrypte.test.js
│   └── vigenereEncrypte.test.js
│
├── .gitignore
├── babel.config.js
├── eslint.config.js
├── index.js
├── LICENSE
├── package.json
├── README.md
└── SECURITY.md
```

## Tests

```bash
npm test
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

- Fork the repository
- Create a feature branch (git checkout -b feature/feature)
- Commit your changes (git commit -m 'Add some feature')
- Push to the branch (git push origin feature/feature)
- Open a Pull Request

## License

Distributed under the MIT License. See LICENSE for more information.

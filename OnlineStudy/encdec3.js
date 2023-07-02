let originalText = "Hello, World!";
let shiftAmount = 3;

// Encrypt the text
let encryptedText = encrypt(originalText, shiftAmount);
console.log(encryptedText); // "Khoor, Zruog!"

// Decrypt the text
let decryptedText = decrypt(encryptedText, shiftAmount);
console.log(decryptedText); // "Hello, World!"

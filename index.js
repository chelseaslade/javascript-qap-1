#!/usr/bin/env node

const process = require("node:process");

//Help Message
function printHelpMsg() {
  console.log(
    `Password Generator Help Message

    --length <num>          Selects length of password. If none entered, defaults to 8 characters. Must be 8+ characters.
    --help                  Display this help message.

    Additional Features:
    --nums                  Includes numbers in password generation.
    --symbols               Includes symbols in password generation.
    --upper                 Includes uppercase characters in password generation.

    Example: generatepassword --length <9>
    Expected output: Your password: xxxxxxxxx`
  );
}

//Collect input from command line
let passwordLength = process.argv.slice(2);

//Default password length of 8
if (passwordLength == "") {
  passwordLength = 8;
}

//Required Variables
const characters = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "1234567890";
const symbols = "!@#$%^&*+-=";

//Main password generation function
function generatePassword(passwordLength) {
  let password = "";
  const characterLength = characters.length;
  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characterLength));
  }
  return password;
}

// Errors
if (passwordLength < 8) {
  printHelpMsg();
  return;
}

//Call Function/Generate Password
password = generatePassword(passwordLength);

//Print password output to console
console.log(`Your password: ${password}`);

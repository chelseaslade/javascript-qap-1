#!/usr/bin/env node

const process = require("node:process");

//Help Message
function printHelpMsg() {
  console.log(
    `Help Message:
    
    To use this app, please enter: 'generatepassword <Number of Characters for Password>'. 

    Example: generatepassword 9
    Expected output: Your secure password: xxxxxxxxx`
  );
}

//Collect input from command line
const passwordLength = process.argv.slice(2);
// console.log(passwordLength);

//Required Variables
const characters = "abcdefghijklmnopqrstuvwxyz";

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
console.log(`Your secure password: ${password}`);

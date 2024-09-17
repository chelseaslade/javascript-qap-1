#!/usr/bin/env node

const process = require("node:process");

//Help Message
function printHelpMsg() {
  console.log(
    `To use this app, please enter: 'generatepassword <Number of Characters for Password>'. 

    Example: generatepassword <9>
    Expected output: Your secure password: xxxxxxxxx`
  );
}

//Collect input from command line
const passwordLength = process.argv.slice(2);

//Required Variables
let characters = [abcdefghijklmnopqrstuvwxyz];

//Main password generation function
function generatePassword() {
  let password = "";
  return password;
}

//Errors
if (passwordLength.length < 8) {
  printHelpMsg();
  return;
}

//Call Function/Generate Password
const password = generatePassword();

//Print password output to console
console.log(`Your secure password: ${password}`);

#!/usr/bin/env node

const { parse } = require("node:path");
const process = require("node:process");

//Help Message
function printHelpMsg() {
  console.log(
    `Password Generator Help Message

    DEFAULT: If no arguments are entered, password defaults to 8 characters in length and lowercase characters only.

    --length <num>          Selects length of password. Must be 8+ characters.
    --help                  Display this help message.

    Additional Features:
    --nums                  Includes numbers in password generation.
    --symbols               Includes symbols in password generation.
    --upper                 Includes uppercase characters in password generation.

    Example: generatepassword --length 9
    Expected output: Your password: xxxxxxxxx`
  );
}

//Defaults
let passwordLength = "";
let includeNum = false;
let includeUpper = false;
let includeSymbols = false;

//Collect input from command line
const userArgs = process.argv.slice(2);

//Parse & check for flags
let i = 0;
while (i < userArgs.length) {
  switch (userArgs[i]) {
    case "--length":
      const secondaryArg = userArgs[i + 1];
      const parseLength = parseInt(secondaryArg);

      if (parseLength >= 8) {
        passwordLength = parseLength;
      } else {
        printHelpMsg();
        return;
      }

      i += 2;
      continue;

    case "--nums":
      includeNum = true;
      break;

    case "--symbols":
      includeSymbols = true;
      break;

    case "--upper":
      includeUpper = true;
      break;
  }
  i++;
}

//Main password generation function
function generatePassword(
  passwordLength,
  includeNum,
  includeUpper,
  includeSymbols
) {
  //Required Variables

  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "1234567890";
  const symbols = "!@#$%^&*+-=";

  //Determine characters (Default: Lowercase)
  let characters = lower;

  //Add additional characters if flagged
  if (includeNum == true) {
    characters += nums;
  }
  if (includeUpper == true) {
    characters += upper;
  }
  if (includeSymbols == true) {
    characters += symbols;
  }

  //Default password length of 8
  if (passwordLength == "") {
    passwordLength = 8;
  }

  let password = "";
  const characterLength = characters.length;
  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characterLength));
  }
  return password;
}

//Call Function/Generate Password
password = generatePassword(
  passwordLength,
  includeNum,
  includeUpper,
  includeSymbols
);

//Print password output to console
console.log(`Your password: ${password}`);

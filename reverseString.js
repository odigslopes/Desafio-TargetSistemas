function reverseString(inputString) {
  let reversedString = '';

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  return reversedString;
}

const userInput = "Olá, eu sou uma string invertida";

const invertedString = reverseString(userInput);
console.log(`✨ A string invertida é: "${invertedString}"`);

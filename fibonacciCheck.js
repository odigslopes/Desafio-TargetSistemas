const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isNumberInFibonacci(number) {
  if (number < 0) return `O número ${number} não pertence à sequência de Fibonacci.`;
  let a = 0, b = 1;
  while (b < number) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  if (b === number) {
    return `O número ${number} pertence à sequência de Fibonacci.`;
  }
  return `O número ${number} não pertence à sequência de Fibonacci.`;
}

rl.question('Digite um número para verificar se ele pertence à sequência de Fibonacci: ', (input) => {
  const userInputNumber = parseInt(input);
  
  console.log(isNumberInFibonacci(userInputNumber));  
  rl.close();
});

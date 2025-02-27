const MAX_VALUE = 13;
let totalSum = 0;
let currentValue = 0;

while (currentValue < MAX_VALUE) {
  currentValue++;
  totalSum += currentValue;
}

console.log(totalSum);

const fs = require('fs');

fs.readFile('BillingByState/billingByState.json', 'utf8', (error, fileContent) => {
  if (error) {
    console.error('Ops! Algo deu errado ao ler o arquivo JSON:', error);
    return;
  }

  const billingByState = JSON.parse(fileContent);
  const totalBilling = Object.values(billingByState).reduce((total, value) => total + value, 0);  
  const calculatePercentage = (value, total) => ((value / total) * 100).toFixed(2);
  
  console.log('Aqui está o percentual de faturamento de cada estado no total mensal:');
  for (const state in billingByState) {
    const percentage = calculatePercentage(billingByState[state], totalBilling);
    console.log(`📊 O estado de ${state} representa ${percentage}% do faturamento total.`);
  }
});

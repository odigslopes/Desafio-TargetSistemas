const fs = require('fs');

fs.readFile('Billing/billing.json', 'utf8', (error, fileContent) => {
  if (error) {
    console.error('Ocorreu um erro ao ler o arquivo JSON:', error);
    return;
  }

  const billingData = JSON.parse(fileContent);

  const daysWithBilling = billingData.filter(day => day.valor > 0);

  const lowestBilling = Math.min(...daysWithBilling.map(day => day.valor));
  const highestBilling = Math.max(...daysWithBilling.map(day => day.valor));

  const totalBilling = daysWithBilling.reduce((total, day) => total + day.valor, 0);
  const averageBilling = totalBilling / daysWithBilling.length;

  const daysAboveAverage = daysWithBilling.filter(day => day.valor > averageBilling).length;
  
  const formatValue = value => `R$ ${value.toFixed(2).replace('.', ',')}`;

  console.log(`📉 O menor faturamento diário registrado foi: ${formatValue(lowestBilling)}`);
  console.log(`📈 O maior faturamento diário registrado foi: ${formatValue(highestBilling)}`);
  console.log(`📊 Houve ${daysAboveAverage} dias com faturamento superior à média mensal (${formatValue(averageBilling)}).`);
});

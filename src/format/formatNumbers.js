function formatNumber(value) {
  return value.toLocaleString('pt-BR', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });
}

function formatPerc(value) {
  return value.toLocaleString('pt-BR', {
    maximumFractionDigits: 2,
  });
}

export { formatNumber, formatPerc };

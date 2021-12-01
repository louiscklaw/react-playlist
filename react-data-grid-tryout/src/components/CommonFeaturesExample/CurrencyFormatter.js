const currencyFormatter = new Intl.NumberFormat(navigator.language, {
  style: 'currency',
  currency: 'eur',
});

function CurrencyFormatter({ value }) {
  return <>{currencyFormatter.format(value)}</>;
}

export default CurrencyFormatter;

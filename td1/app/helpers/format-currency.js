import { helper } from '@ember/component/helper';

export default helper(function formatCurrency([value, symbol]) {
  let euros = Math.floor(value);
  let cents = (value - euros).toFixed(2) * 100;

  if (cents.toString().length === 1) {
    cents = '0' + cents;
  }
  return euros + ',' + cents + ' ' + symbol;
});

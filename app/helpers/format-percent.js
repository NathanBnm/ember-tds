import { helper } from '@ember/component/helper';

export default helper(function formatPercent(value) {
  let percent = value * 100;
  return percent + ' %';
});

import { helper } from '@ember/component/helper';

export default helper(function plural([count, zero, one, other]) {
  if(count === 0)
    return "Aucun " + zero;
  if(count === 1)
    return  count + " " + one;
  if(count > 1)
    return count + " "  + other;
});

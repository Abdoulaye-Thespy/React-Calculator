const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  const one = new Big(numberOne);
  const two = new Big(numberTwo);
  switch (operation) {
    case '+':
      return one.plus(two).toString();
    case '-':
      return one.minus(two).toString();
    case 'x':
      return one.times(two).toString();
    case '÷':
      if (two !== 0) {
        return one.div(two).toString();
      }
      return undefined;
    default:
      return 0;
  }
};
export default operate;

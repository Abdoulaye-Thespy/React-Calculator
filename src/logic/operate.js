const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
	let one = new Big(numberOne);
	let two = new Big(numberTwo);
	switch (operation) {
		case '+':
			return one.plus(two).toString();
		case '-':
			return one.minus(two).toString();
		case 'x':
			return one.times(two).toString();
		case '÷':
			if (two != 0) {
				return one.div(two).toString();
			} else {
				return undefined;
			}
	}
};
export default operate;

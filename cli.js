// cli.js

const calculator = require('./calculator');

const [,, operation, num1, num2] = process.argv;

let result;

switch (operation) {
    case 'add':
        result = calculator.add(parseFloat(num1), parseFloat(num2));
        break;
    case 'subtract':
        result = calculator.subtract(parseFloat(num1), parseFloat(num2));
        break;
    case 'multiply':
        result = calculator.multiply(parseFloat(num1), parseFloat(num2));
        break;
    case 'divide':
        result = calculator.divide(parseFloat(num1), parseFloat(num2));
        break;
    default:
        result = 'Invalid operation';
}

console.log('Result:', result);

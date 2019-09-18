//Problem 2 (PS1.P2.js)
// Write a function that takes as input each of the following strings in turn:
// ‘4+2’
// ‘5*7’
// ‘6-1’
// ‘9/2’
// This function should
// Determine the operator (+, *, -, or /) embedded in the string
// Return a function to implement the input operator that returns the result
// For example, if the input string is ‘8%3’, return (left, right) => left % right
// Execute the returned function to evaluate and print each expression. For example,
// const expression = '8%3';
// let operator = evaluate(expression);
// console.log(`${expression} = ${operator(expression)}`)
//
//
// You can assume that the format of the input string is fixed (i.e. a digit, an operator, and a digit,
// always the same length).


const evaluate = (str) => {
    const list = str.split('');

    const leftDigit = parseInt(list[0]);
    const operator = list[1];
    const rightDigit = parseInt(list[2]);

    if (operator === '+') {
        return leftDigit + rightDigit;
    } else if (operator === '*') {
        return leftDigit * rightDigit;
    } else if (operator === '-') {
        return leftDigit - rightDigit;
    } else if (operator === '/') {
        return leftDigit / rightDigit;
    }

};

const firstExpression = '4+2';
const secondExpression = '5*7';
const thirdExpression = '6-1';
const fourthExpression = '9/2';


console.log(`${firstExpression} = ${evaluate(firstExpression)}`);
console.log(`${secondExpression} = ${evaluate(secondExpression)}`);
console.log(`${thirdExpression} = ${evaluate(thirdExpression)}`);
console.log(`${fourthExpression} = ${evaluate(fourthExpression)}`);
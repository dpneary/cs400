// Problem 1 (PS2.P1.js)
// Write two generators that together implement a series of even Fibonacci numbers. The first
// generator should return the series of fibonacci numbers starting from 0. The series F is defined
// as
// F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
// The second generator should use the first to obtain the next number in the sequence, rejecting
// it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
// Use the generators to print out the first 6 even Fibonacci numbers.

function* fibonacci() {
    let twoAgo = 0;
    let oneAgo = 1;
    yield 0;
    yield 1;

    while (true) {
        current = twoAgo + oneAgo;
        twoAgo = oneAgo;
        oneAgo = current;

        yield current;
    }
}

function* evenFibonacci() {
    fibonacci = fibonacci();
    while (true) {
        let nextFibonacci = fibonacci.next().value;
        if (nextFibonacci % 2 === 0) {
            yield nextFibonacci;
        }
    }
}

evenFibs = evenFibonacci();

for (count = 0; count < 5; count++) {
    console.log(evenFibs.next().value);
}
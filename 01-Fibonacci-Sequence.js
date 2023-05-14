/* 
Fibonnacci sequence

Problem - Give a number 'n', find the first 'n' elements of the Fibonacci Sequence

In Mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding onese. 

The first two numbers in the sequence are 0 and 1.

fibonacci(2) = [0,1]

fibonacci(3) = [0,1,1]

fibonacci(7) = [0,1,1,2,3,5,8]

*/

function fibonacci(n) {
    const fib = [0, 1]; // First Call
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2]; // Second Call 
    }
    return fib // Third Call
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(6));

// Big-O = O(n) = Linear Time Complexity
// n + 2
/* 
Tips for recursive solutions
Figure out how to break down the problem into smaller versions of the same problem
Indentify the base case for recursion
*/
function recursiveFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

// O(2^n) - Recursive 
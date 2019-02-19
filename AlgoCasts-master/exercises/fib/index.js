// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Brute Force Method by Praneeth
// function fib(n) {
//     if (n === 0)
//     {
//         return;
//     }
//     let result = [0];
//     for(let i=0; i<n;)
//     {
//         if (result.length === 1){
//             result.push(1)
//             i++;
//         }
//         else {
//             result.push(result[i-1] + result[i])
//             i++;
//         }
//     }
//     // console.log(result[result.length - 1]);
    
//     return result[result.length - 1];
// }

// Linear Solution
// function fib(n) {
//     const result = [0, 1]
//     let i = 2;
//     while (i <= n)
//     {
//         const a = result[i - 1]
//         const b = result[i - 2]
//         result.push(a + b);
//         i++;
//     }
//     return result[n]
// }

function memoize(fn)
{
    const cache = {}
    return function(...args) {
        if (cache[args])
        {
            return cache[args]
        }
        const result = fn.apply(this, args)
        cache[args] = result;
        return result;
    }
}
function slowFib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n-2)
}

const fib = memoize(slowFib)
// fib(4);
module.exports = fib;

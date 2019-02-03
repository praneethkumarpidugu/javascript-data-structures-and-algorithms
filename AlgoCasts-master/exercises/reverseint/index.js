// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My Solution
// function reverseInt(n) {
//     let reversed = '';
//     let convertedInt = n.toString();
//     let negativeNumber = false;
//     for (let char of convertedInt)
//     {
//         if(char == '-')
//         {
//             negativeNumber = true;
//             continue;
//         }
//         reversed = char + reversed;
//     }
//     if(negativeNumber)
//     {
//         reversed = "-" + reversed;
//         return parseInt(reversed);
//     }
//     return parseInt(reversed);
// }

function reverseInt(n)
{
    return parseInt(n
    .toString()
    .split('')
    .reverse()
    .join('')) * Math.sign(n);
}
reverseInt(-51);
module.exports = reverseInt;

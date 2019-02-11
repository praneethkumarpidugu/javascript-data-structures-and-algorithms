// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let i = 0;
//     while (i < n){
//         console.log('#'.repeat(i+1)+' '.repeat(n-i-1))
//         i++
//     }
// }
// function steps(n) {
//     for(let row = 0; row<n;row++)
//     {
//         let stairs = ''
//         for (col = 0; col < n; col++)
//         {
//             if (col <= row)
//             {
//                 stairs = stairs + '#'
//             }
//             else
//             {
//                 stairs = stairs + ' '
//             }
//         }
//         console.log(stairs);
//     }
// }

// Sample recursive function
// function steps(n)
// {
//     if(n==0)
//     {
//         return;
//     }
//     console.log(n)
//     steps(n-1)
    
// }
function steps(n, row=0, stair = '')
{
    if (n === row)
    {
        return;
    }

    if (n === stair.length)
    {
        console.log(stair);
        return steps(n, row+1)
    }
    if(stair.length <= row)
    {
        stair += '#'
    }
    else
    {
        stair += ' '
    }
    steps(n, row, stair)
}
steps(4)
module.exports = steps;

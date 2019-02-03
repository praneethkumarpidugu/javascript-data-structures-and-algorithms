// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// My Solution
// function maxChar(str) {
//     let myResult = {};
//     for(let char of str)
//     {
//         if(char in myResult)
//         { 
//             myResult[char] = myResult[char] + 1;  
//         } else {
//             myResult[char] = 1;
//         }
//     }
    
//     console.log(myResult);  
// }

function maxChar(str)
{
    const myResult = {};
    for (let char of str)
    {
        // myResult[char] = myResult[char] + 1 || 1;
        if (!myResult[char])
        {
            myResult[char] = 1;
        } else {
            myResult[char]++;
        }
    }
    let maxChar = '';
    let maxValue = 0;
    for(key in myResult)
    {
        if(myResult[key] > maxChar)
        {
            maxValue = myResult[key];
            maxChar = key;
        }
    }
    console.log(maxChar);
    
    return maxChar;   
}
maxChar('aaasdsfsfabb');
module.exports = maxChar;

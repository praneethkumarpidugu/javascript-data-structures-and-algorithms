// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// My Solution
// function anagrams(stringA, stringB) {
//     // We will use regex to replace space and symbols with empty string
//     const word1 = stringA.replace(/[^\w]/g,"").toLowerCase();
//     const word2 = stringB.replace(/[^\w]/g,"").toLowerCase();
//     console.log(word1);
//     console.log(word2);
//     let match = false;
//     let counter = 0;
//     for(let char of word1)
//     {
//         for(let char2 of word2)
//         {
//             if(char == char2){
//                 counter++;
//                 break;
//             } else {
//                 continue;
//             }
//         }
//     }
//     if((word1.length && word2.length) === counter)
//     {
//         return true;
//     }
//     return false;
// }

function anagrams(stringA, stringB) {
    const aChar = buildCharMap(stringA)
    const bChar = buildCharMap(stringB)

    if(Object.keys(aChar).length !== Object.keys(bChar).length)
    {
        return false;
    }
    for(let char in aChar)
    {
        if(aChar[char] !== bChar[char])
        {
            return false
        }
    }
    return true;
    
}

function buildCharMap(str)
{
    const charMap = {};
    for(let char of str.replace(/[^\w]/g,"").toLowerCase())
    {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}
anagrams("apple", "elppa")
module.exports = anagrams;

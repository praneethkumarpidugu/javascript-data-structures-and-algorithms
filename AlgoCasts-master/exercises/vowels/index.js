// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let charMap1 = charMap(str);
    let counter = 0;
    let vowels = 'aeiou'
    for(let char1 of vowels)
    {
        if (char1 in charMap1)
        {
            counter += 1;
        }
    }
    return counter;
}
function charMap(text)
{
    let result_map = {};
    for (let char of text.toLowerCase())
    {
        if (char in result_map)
        {
            result_map[char] += 1;
        }
        else
        {
            result_map[char] = 1
        }
    }
    return result_map;
}

module.exports = vowels;

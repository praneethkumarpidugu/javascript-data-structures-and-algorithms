// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     let palindrome_result = "";
//     for(let char of str)
//     {
//         palindrome_result = char + palindrome_result;
//     }
//     if(palindrome_result == str)
//     {
//         return true;
//     }
//     return false;
// }


// Udemy Solution # 1

// function palindrome(str)
// {
//     let reversedString = str.split('').reverse().join('');

//     return reversedString == str;
// }

// Udemy Solution # 2 using Array.prototype.every()
function palindrome(str)
{
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}
palindrome('ravali');
module.exports = palindrome;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversedString = '';
    for(let char of str)
    {
        reversedString = char + reversedString;
    }
    console.log(reversedString);
    
    return reversedString;
}
reverse('apple')

module.exports = reverse;

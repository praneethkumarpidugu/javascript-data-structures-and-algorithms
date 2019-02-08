// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     const splitWord =  str.split(' ');

//     let i=0;
//     let k=0;
//     let constFinalWord = [];
//     let joinWord = [];
//     while(i < splitWord.length)
//     {
//         let char = splitWord[i].split('');
//         while (k < char.length)
//         {
//             if(k === 0)
//             {
//                 joinWord.push(char[k].toUpperCase());
//                 k++;
//                 continue;
//             }
//             joinWord.push(char[k]);
//             k++;
//         }
//         k=0;
//         constFinalWord.push(joinWord.join(''));
//         joinWord = [];
//         i++;
//     }
//     return constFinalWord.join(' ');
// }

// function capitalize(str) {
//     let initialString = [];
//     let i=0,j=1;
//     for(let char of str.split(' '))
//     {
//         initialString.push(char[i].toUpperCase()+char.slice(j));
//     }

//     return initialString.join(' ');
    
// }
function capitalize(str) {
    let result = str[0].toUpperCase();
    for(let i=1; i<str.length;i++)
    {
        if(str[i -1] === ' ')
        {
            result = result + str[i].toUpperCase()
        } else {
            result = result + str[i];
        }
    }
    return result
    
}
capitalize('a short sentence');

module.exports = capitalize;
